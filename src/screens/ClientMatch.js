import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { styles } from "../styles/styles";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ClientMatch = () => {
  const [text, setText] = useState("");
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "Personal Trainers")).then((data) => {
      let dataArr = [];
      data.docs.forEach((item) => {
        dataArr.push(item.data());
      });
      setQueryData(dataArr);
    });
  }, []);

  const localPts = queryData.filter((pt) => {
    return pt.city.toLowerCase() === text.toLowerCase();
  });

  return (
    <div style={{ backgroundColor: "rgb(242, 242, 242)" }}>
      <View>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={{ fontSize: 50 }}>Find a PT</Text>
          <TextInput
            style={style.input}
            placeholder="Enter location"
            onChangeText={(text) => {
              setText(text);
            }}
            value={text}
          />
          <ul
            key="testDataList"
            style={{
              marginTop: "50px",
              padding: "10px",
            }}
          >
            {localPts.map((user, index) => {
              return (
                <li
                  style={{
                    listStyleType: "none",
                  }}
                  key={"testli" + index}
                >
                  <TouchableOpacity
                    style={style.card}
                    contentContainerStyle={{
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "10px",
                        margin: "10px",
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: "10px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#F0CF29",
                          borderTopLeftRadius: 20,
                          borderTopRightRadius: 20,
                          margin: "-10px",
                          padding: "5px",
                          minWidth: "90vw",
                        }}
                      >
                        <Image
                          source={{
                            uri: `${user.image}`,
                          }}
                          style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            float: "left",
                            marginRight: "10px",
                          }}
                        />
                        <h4 style={{ flexDirection: "row" }}>{user.name}</h4>
                      </div>
                      <div>
                        <br></br>
                        <h5>Speciality</h5>
                        <p>{user.speciality}</p>
                        <h5>Contact Details</h5>
                        <p>Email: {user.email}</p>
                        <p>Phone Number: {user.phoneNumber}</p>
                      </div>
                    </div>
                  </TouchableOpacity>
                </li>
              );
            })}
          </ul>
        </ScrollView>
      </View>
    </div>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 200,
  },
  card: {
    justifyContent: "center",
    padding: "0%",
  },
  container: {
    paddingTop: "100px",
  },
});

export default ClientMatch;
