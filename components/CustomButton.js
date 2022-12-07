import { View, Text, Pressable, StyleSheet } from "react-native";

const CustomButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={props.onClick}
        android_ripple={{ color: "lightblue" }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "darkblue",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "blue",
    height: 70,
    overflow: "hidden",
  },
  button: {
    padding: 20,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
