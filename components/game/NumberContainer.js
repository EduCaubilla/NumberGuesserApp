import { Text, View, StyleSheet, Dimensions} from "react-native";

import AppColors from "../../utils/app-colors";

function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: AppColors.primary500,
        marginTop: deviceWidth < 380 ? 10 : 15,
        marginHorizontal: deviceWidth < 380 ? 10 : 20,
        padding: deviceWidth < 380 ? 10 : 15,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: AppColors.primary500,
        fontSize: deviceWidth < 380 ? 25 : 40,
        fontFamily: "open-sans-bold",
    }
});
