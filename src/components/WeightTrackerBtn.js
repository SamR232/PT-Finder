import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

const WeightTrackerBtn = () => {
  const navigation = useNavigation();
  const navToWeightTracker = () => {
    navigation.navigate("WeightTracker");
  };
  return (
    <TouchableOpacity onPress={navToWeightTracker} style={styles.button}>
      <Text style={styles.buttonText}>Log today's weight</Text>
    </TouchableOpacity>
  );
};

export default WeightTrackerBtn;
