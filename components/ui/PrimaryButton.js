import { View, Text, Pressable, StyleSheet } from "react-native";

import AppColors from "../../utils/app-colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: AppColors.primary200 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    margin: 5,
    elevation: 2,
    shadowColor: AppColors.shadow400,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: AppColors.primary500,
    padding: 15,
  },
  buttonText: {
    fontFamily: "open-sans",
    color: AppColors.secondary200,
    fontSize: 20,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
