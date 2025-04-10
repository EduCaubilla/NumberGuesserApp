import { View, Text, StyleSheet } from "react-native";
import AppColors from "../../utils/app-colors";
import App from "../../App";

function GuessLogItem({roundNumber, guess}){
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Machine guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: AppColors.primary700,
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: AppColors.secondary500,
        elevation: 4,
        shadowColor: AppColors.shadow400,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: "open-sans"
    }
})