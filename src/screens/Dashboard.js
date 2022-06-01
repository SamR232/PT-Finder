import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import ClientMatchBtn from "../components/ClientMatchBtn";
import WeightTrackerBtn from "../components/WeightTrackerBtn";
import DashboardInputBox from "../components/DashboardInputBox";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { View, Text } from "react-native";
import { styles } from "../styles/styles";
import Header from "../components/Header";
import Quotes from "../quotes/quotes";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const readUser = JSON.stringify(user.email);
  const readUserEmail = readUser.replaceAll('"', "");

  useEffect(() => {
    const colRef = collection(db, "users");
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email === readUserEmail) {
            setUser({
              ...doc.data(),
              id: doc.id,
            });
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const quoteGenerator = () => {
    let randomId = Math.floor(Math.random() * 10);
    return Quotes[randomId];
  };

  return (
    <>
      <View style={styles.dashContainer}>
      <Header />
        <h1>{user.username}'s Dashboard</h1>
        <Text style={styles.text}>
          Here you can view your profile details, log weight for the day and
          find a personal trainer near you!
        </Text>
        <ProfileDetailsBtn />
        <ClientMatchBtn />
        <LogOutBtn />
        <Text style={styles.quote}>{quoteGenerator()}</Text>
      </View>
    </>
  );
};

export default Dashboard;
