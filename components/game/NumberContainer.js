import { Text, View, StyleSheet } from "react-native";

import AppColors from "../../constants/app-colors";

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: AppColors.primary500,
        marginTop:15,
        padding: 25,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: AppColors.primary500,
        fontSize: 60,
        fontWeight: "bold"
    }
});
