import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to bottom, #FACA01, #C19B01)",
    padding: 40,
  },

  circleBar: {
    width: "100%",
  },
  title: {
    width: "189px",
    fontSize: "25px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
  },
  desc: {
    width: "100%",
    fontSize: "15px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "18px",
  },
  buttonContainer: {
    width: "100%",
  },
  title2: {
    fontSize: "18px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
  },
  emailInput: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    padding: "10px",
  },
  emailTextInput: {
    height: "100%",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "15px",
    marginLeft: "15px",
  },
  headerText: {
    fontSize: "60px",
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
  },
  touchableOpacityEye: {
    backgroundColor: "teal",
    height: "100%",
    position: "absolute",
    right: 0,
    top: 0,
  },
});
