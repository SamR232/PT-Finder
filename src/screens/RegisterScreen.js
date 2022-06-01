import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { styles } from "../styles/styles";

const regexUser = /^[a-zA-Z0-9]{4,10}$/;
const regexPhone = /^[0-9 -#+()]+$/;
const regexLocation = /^[a-zA-Z]{1,}/;
const regexEmail =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regexProfilePicURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicURL, setProfilePicURL] = useState("");
  const [exerciseGoals, setExerciseGoals] = useState([]);
  const [isPersonalTrainer, setIsPersonalTrainer] = useState(false);
  const [userErrors, setUserErrors] = useState({
    nameErr: false,
    phoneErr: false,
    emailErr: false,
    locationErr: false,
    passwordErr: false,
    profilePicURLErr: false,
  });

  const handleSignup = async () => {
    const userValid = regexUser.test(username);
    const phoneValid = regexPhone.test(phoneNumber);
    const emailValid = regexEmail.test(email);
    const locationValid = regexLocation.test(location);
    const passwordValid = regexPassword.test(password);
    const profilePicURLValid = regexProfilePicURL.test(profilePicURL);

    setUserErrors({
      nameErr: !userValid,
      phoneErr: !phoneValid,
      emailErr: !emailValid,
      locationErr: !locationValid,
      passwordErr: !passwordValid,
      profilePicURLErr: !profilePicURLValid,
    });

    if (
      userValid &&
      phoneValid &&
      emailValid &&
      locationValid &&
      passwordValid &&
      profilePicURLValid
    ) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (!isPersonalTrainer) {
          await addDoc(collection(db, "users"), {
            email,
            location,
            username,
            phoneNumber,
            profilePicURL,
          });
          const UserExerciseGoals = await addDoc(
            collection(db, "userExerciseGoals"),
            {
              email,
              exerciseGoals,
            }
          );
          const UserWeightTracker = await addDoc(
            collection(db, "userWeightTracker"),
            {
              email,
              weightTracker: [],
            }
          );
          alert("Registration complete");
          navigation.navigate("Dashboard");
        } else {
          await addDoc(collection(db, "Personal Trainers"), {
            email,
            location,
            username,
            phoneNumber,
            profilePicURL,
          });
          // add PT Dashboard
          navigation.navigate("PTProfilePage");
          alert("Registration complete");
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Image
          style={{
            width: 250,
            height: 250,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 10,
            borderWidth: "2.5px",
            borderRadius: "8px",
          }}
          source={require("../images/app-logo.png")}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        />
        {userErrors.nameErr && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
            User name must only contain letters or numbers, between 4 and 10
            characters.
          </Text>
        )}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        {userErrors.emailErr && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
            Valid email address required.
          </Text>
        )}
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={styles.input}
        />
        {userErrors.phoneErr && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
            Phone number must contain only numbers.
          </Text>
        )}
        <TextInput
          placeholder="Location (e.g Manchester)"
          value={location}
          onChangeText={(text) => setLocation(text)}
          style={styles.input}
        />
        {userErrors.locationErr && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
            Location required.
          </Text>
        )}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
        {userErrors.passwordErr && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
            Minimum 8 characters, at least one upper case, one lower case, one
            number and one special character
          </Text>
        )}
        <TextInput
          placeholder="Avatar URL (.png, .jpg, .jpeg)"
          value={profilePicURL}
          onChangeText={(text) => setProfilePicURL(text)}
          style={styles.input}
        />
        {userErrors.profilePicURLErr && (
          <Text style={{ color: "red", textAlign: "center", marginTop: 5 }}>
            URL to a .PNG, .JPG or .JPEG file required
          </Text>
        )}
        <TouchableOpacity onPress={handleSignup} style={styles.registerBtn}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
