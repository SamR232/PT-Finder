import { Image } from "react-native";

const Header = () => {
  return (
    <Image
      style={{
        width: "100%",
        height: "190px",
        borderBottomWidth: "3px",
        resizeMode: "center",
        backgroundColor: "#F0CF29",
      }}
      source={require("../images/app-logo.png")}
    />
  );
};

export default Header;
