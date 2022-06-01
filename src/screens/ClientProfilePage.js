import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import ClientProfilePic from "../components/ClientProfilePic";
import ExerciseGoals from "../components/ExerciseGoals";
import WeightTrackerScreen from "./WeightTrackerScreen";
import { View } from "react-native";

const ClientProfilePage = () => {
  return (
    <View style={{ backgroundColor: "rgb(242, 242, 242)" }}>
      <ClientProfilePic />
      <PersonalInfo />
      <ExerciseGoals />
      <WeightTrackerScreen />
    </View>
  );
};

export default ClientProfilePage;
