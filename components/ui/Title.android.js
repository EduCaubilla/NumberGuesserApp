import { Text, StyleSheet, Platform } from "react-native";

import AppColors from "../../utils/app-colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontFamily: "open-sans-bold",
      padding: 12,
      marginHorizontal: 20,
      fontSize: 22,
      color: AppColors.primary500,
      textAlign: "center",
      borderColor: "white",
      //borderWidth: Platform.OS === 'ios' ? 3 : 2,
      //borderWidth: Platform.select({ios: 1, android: 3}),
      borderWidth: 2,
      borderRadius: 10,
    }
  });
