import { StyleSheet, View, Image, Text } from "react-native";
import Title from "../components/ui/Title";

import AppColors from "../constants/app-colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return (
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={styles.imageContainer}>
            <Image source={require("../assets/images/success.png")} style={styles.image}/>
        </View>
        <Text style={styles.summaryText}>
            <Text style={styles.highligh}>{roundsNumber}</Text> rounds were needed to guess the number <Text style={styles.highligh}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
      </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 3,
        borderColor: AppColors.shadow400,
        overflow: "hidden",
        margin: 25,
        justifyContent: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText : {
        fontFamily: "open-sans",
        fontSize:30,
        textAlign: "center",
        color: AppColors.shadow300,
        marginBottom: 30
    },
    highligh: {
        fontFamily: "open-sans-bold",
        fontSize: 35,
        color: AppColors.primary500
    }
})
