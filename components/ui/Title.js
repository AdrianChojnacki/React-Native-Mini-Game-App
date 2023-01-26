import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

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
    borderWidth: 2,
    borderColor: "white",
  },
});
