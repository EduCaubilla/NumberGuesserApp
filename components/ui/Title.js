import { Text, StyleSheet } from "react-native";

import AppColors from "../../constants/app-colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
      padding: 15,
      fontSize: 25,
      fontWeight: "bold",
      color: AppColors.primary500,
      textAlign: "center",
      borderColor: AppColors.primary500,
      borderWidth: 3,
      borderRadius: 10
    }
  });
