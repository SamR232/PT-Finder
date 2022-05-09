import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/LoginScreen";

const WeightTrackerBtn = () => {
  const navigation = useNavigation();
  const navToWeightTracker = () => {
    navigation.replace("WeightTracker");
  };
  return (
    <TouchableOpacity onPress={navToWeightTracker} style={styles.button}>
      <Text style={styles.buttonText}>Weight tracker page</Text>
    </TouchableOpacity>
  );
};

export default WeightTrackerBtn;