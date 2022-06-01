import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../styles/styles";

const ProfileDetailsBtn = () => {
  const navigation = useNavigation();
  const navToProfilePage = () => {
    navigation.navigate("ClientProfile");
  };

  return (
    <View style={styles.dashButtonContainer}>
      <TouchableOpacity
        onPress={navToProfilePage}
        style={styles.button}
        color="#f194ff"
      >
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileDetailsBtn;
