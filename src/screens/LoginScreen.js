import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../UserContext";
import { styles } from "../styles/styles";
import { async } from "@firebase/util";

const LoginScreen = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err.message);
      if (err.message == "Firebase: Error (auth/invalid-email).") {
        setError("Email address not recognised");
      } else if (err.message == "Firebase: Error (auth/wrong-password).") {
        setError("Password incorrect");
      }
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currUser) => {
      if (currUser) {
        setUser(currUser);
        navigation.replace("Dashboard");
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  if (isLoading) return <Text style={styles.text}>Loading...</Text>;

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <Image
          style={{
            width: 250,
            height: 250,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 50,
            borderWidth: "2.5px",
            borderRadius: "8px",
          }}
          source={require("../images/app-logo.png")}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
        <Text>{error}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
