import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

const PTDashboardBtn = () => {
  const navigation = useNavigation();
  const navToPTPage = () => {
    navigation.navigate("PTProfilePage");
  };

  return (
    <TouchableOpacity onPress={navToPTPage} style={styles.button}>
      <Text style={styles.buttonText}>PT Profile Page</Text>
    </TouchableOpacity>
  );
};

export default PTDashboardBtn;
