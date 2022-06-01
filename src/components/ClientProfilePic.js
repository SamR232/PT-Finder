import React, { Profiler, useContext, useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { UserContext } from "../UserContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderRadius: "50%",
    borderWidth: 5,
    borderColor: "#F0CF29",
    margin: 20,
    alignSelf: "center",
  },
});

const ClientProfilePic = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.stretch} source={{ uri: user.profilePicURL }} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 50,
            color: "black",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {user.username}
        </Text>
      </View>
    </>
  );
};

export default ClientProfilePic;
