import { Text, StyleSheet } from "react-native";

import AppColors from "../../constants/app-colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontFamily: "open-sans-bold",
      padding: 15,
      marginHorizontal: 20,
      fontSize: 24,
      color: AppColors.primary500,
      textAlign: "center",
      borderColor: AppColors.primary500,
      borderWidth: 3,
      borderRadius: 10
    }
  });
