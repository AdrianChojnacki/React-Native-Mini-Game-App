import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
