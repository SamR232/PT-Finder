import {
  collection,
  connectFirestoreEmulator,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  CheckBox,
  TouchableOpacity,
} from "react-native";

import { UserContext } from "../UserContext";

const ExerciseGoals = () => {
  const [exerciseGoals, setExerciseGoals] = useState([]);
  const [currentGoalentry, setCurrentGoalentry] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const colRef = collection(db, "userExerciseGoals");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        if (document.data().email === user.email) {
          setExerciseGoals(document.data().exerciseGoals);
        }
      });
    });
  }, []);

  useEffect(() => {
    const colRef = collection(db, "userExerciseGoals");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        if (document.data().email === user.email) {
          setDoc(doc(db, "userExerciseGoals", document.id), {
            email: user.email,
            exerciseGoals: exerciseGoals,
          });
        }
      });
    });
  }, [exerciseGoals]);

  const saveGoalClick = () => {
    if (currentGoalentry !== "") {
      setExerciseGoals((currExerciseGoals) => {
        // return [...currExerciseGoals, currentGoalentry];
        return [
          ...currExerciseGoals,
          { goal: currentGoalentry, completed: false },
        ];
      });
      setCurrentGoalentry("");
    }
  };

  return (
    <>
      <Text style={styles.textTitle}>Exercise Goals</Text>
      <View>
        <TextInput
          placeholder="Add New Exercise Goal"
          onChangeText={(text) => {
            return setCurrentGoalentry(text);
          }}
          value={currentGoalentry}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity onPress={saveGoalClick} style={styles.button}>
          <Text style={styles.buttonOutlineText}>Save New Goal</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textSubTitle}>Your Goals</Text>
      <Text style={styles.goalListItem}>
        Tick a box to mark a goal as complete
      </Text>
      <View>
        {exerciseGoals.map((goal, ind) => {
          if (!goal.completed) {
            return (
              <View key={"goalview" + ind}>
                <Text style={styles.goalListItem} key={"goalkey" + ind}>
                  <CheckBox
                    disabled={false}
                    value={goal.completed}
                    onValueChange={(newValue) => {
                      let modGoals = exerciseGoals.map((ele, eleInd) => {
                        if (eleInd !== ind) {
                          return ele;
                        } else {
                          return { ...ele, completed: newValue };
                        }
                      });
                      setExerciseGoals(modGoals);
                    }}
                  />
                  {"   " + goal.goal}
                </Text>
              </View>
            );
          }
        })}
      </View>
      <Text style={styles.textSubTitle}>Completed Goals</Text>
      <View>
        {exerciseGoals.map((goal, ind) => {
          if (goal.completed) {
            return (
              <View key={"goalview" + ind}>
                <Text style={styles.goalListItem} key={ind}>
                  <CheckBox
                    disabled={false}
                    value={goal.completed}
                    onValueChange={(newValue) => {
                      let modGoals = exerciseGoals.map((ele, eleInd) => {
                        if (eleInd !== ind) {
                          return ele;
                        } else {
                          return { ...ele, completed: newValue };
                        }
                      });
                      setExerciseGoals(modGoals);
                    }}
                  />
                  {"   " + goal.goal}
                </Text>
              </View>
            );
          }
        })}
      </View>
    </>
  );
};

// {goal: "walk", completed: false}

const styles = StyleSheet.create({
  text: {
    fontFamily: "sans-serif",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  goalListItem: {
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
  },
  button: {
    backgroundColor: "#F0CF20",
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
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "600",
    fontSize: 14,
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
  textSubTitle: {
    fontWeight: "700",
    fontSize: 16,
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 5,
  },
  // container: { flex: 1, justifyContent: "center", alignItems: "center" },
  // inputContainer: { width: "80%" },
  // text: {
  //   backgroundColor: "#F0CF29",
  //   paddingHorizontal: 15,
  //   paddingVertical: 10,
  //   borderRadius: 10,
  //   marginTop: 5,
  // },
  // buttonText: { color: "black", fontWeight: "700", fontSize: 16 },
  // checkboxContainer: {
  //   flexDirection: "row",
  //   marginBottom: 20,
  // },
  // checkbox: {
  //   alignSelf: "center",
  // },
  // label: {
  //   margin: 8,
  // },
});

export default ExerciseGoals;
