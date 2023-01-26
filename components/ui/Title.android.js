import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    width: 300,
    maxWidth: "80%",
    padding: 12,
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderWidth: 2,
    borderColor: "white",
  },
});
