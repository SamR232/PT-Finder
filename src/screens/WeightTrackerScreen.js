import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { UserContext } from "../UserContext";

const currDate = () => {
  let x = new Date(Date.now());
  return (
    x.getDate().toString().padStart(2, 0) +
    "-" +
    x.getMonth().toString().padStart(2, 0) +
    "-" +
    x.getFullYear() +
    " "
    // +
    //   x.getHours().toString().padStart(2, 0) +
    //   ":" +
    //   x.getMinutes().toString().padStart(2, 0)
  );
};

const WeightTrackerScreen = () => {
  const [weight, setWeight] = useState([]);
  const [text, setText] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [userError, setUserError] = useState("");

  useEffect(() => {
    const colRef = collection(db, "userWeightTracker");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        if (document.data().email === user.email) {
          setWeight(document.data().weightTracker);
          console.log(document.data().weightTracker);
        }
      });
    });
  }, []);

  useEffect(() => {
    const colRef = collection(db, "userWeightTracker");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        if (document.data().email === user.email) {
          setDoc(doc(db, "userWeightTracker", document.id), {
            email: user.email,
            weightTracker: weight,
          });
        }
      });
    });
  }, [weight]);

  const addWeightClick = () => {
    const regexNum = /^(\d*\.)?\d+$/;
    const isValid = regexNum.test(text);
    if (isValid) {
      setWeight((currWeights) => {
        return [{ weight: text, date: currDate() }, ...currWeights];
      });
      setText("");
      setUserError("");
    } else {
      setUserError("Number required");
    }
  };

  return (
    <>
      <View>
        <Text style={style.textTitle}>Weight Tracker</Text>
        <TextInput
          style={style.input}
          placeholder="Enter current weight (kg)"
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <Text style={style.errorText}>{userError}</Text>
        <View>
          <TouchableOpacity onPress={addWeightClick} style={style.button}>
            <Text style={style.buttonOutlineText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View>
          {weight.map((item, ind) => {
            return (
              <Text style={style.weightListItem} key={ind}>
                {`Weight: ${item.weight}kg`}
                <br></br>
                {`Date: ${item.date}`}
              </Text>
            );
          })}
        </View>
        <Text style={{ marginTop: 40 }}></Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    width: "30%",
    minWidth: 300,
  },
  textTitle: {
    fontWeight: "700",
    fontSize: 16,
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: "1px",
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#F0CF29",
    width: "25%",
    padding: 6,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    minWidth: 150,
    borderWidth: "2.5px",
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 20,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "600",
    fontSize: 14,
  },
  weightListItem: {
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
  },
});

export default WeightTrackerScreen;
