import { StyleSheet, View } from "react-native";

import AppColors from "../../constants/app-colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      marginTop: 20,
      marginHorizontal:20,
      backgroundColor: AppColors.primary400,
      borderRadius: 10,
      elevation: 5,
      shadowColor: AppColors.shadow300,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      shadowOpacity: 0.5,
    },
});
