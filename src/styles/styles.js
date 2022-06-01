import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontFamily: "sans-serif",
    fontSize: 15,
    paddingLeft: "20px",
    paddingRight: "20px",
    textAlign: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    fontSize: 15,
  },

  dashContainer: {
    flex: 1,
    alignItems: "center",
    fontFamily: "sans-serif",
    fontSize: 15,
  },

  dashButtonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2.5%",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
  },

  inputContainer: {
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 250,
    borderWidth: "1.5px",
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  button: {
    backgroundColor: "#F0CF29",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "5%",
    borderWidth: "2.5px",
    marginBottom: "5%",
  },

  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },

  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "sans-serif",
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  registerBtn: {
    marginTop: "5%",
    backgroundColor: "#F0CF29",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: "2.5px",
  },
  quote: {
    fontFamily: "sans-serif",
    fontSize: 15,
    margin: "20px",
    fontStyle: "italic",
    fontWeight: "bold",
    bottom: "0%",
    position: "fixed",
    textAlign: "center",
  },
});

export { styles };
