import { signOut } from "firebase/auth";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const LogOutBtn = () => {
  const navigation = useNavigation();
  const logOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  return (
    <View style={styles.dashButtonContainer}>
      <TouchableOpacity onPress={logOut} style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogOutBtn;
