import { StyleSheet, View, Image, Text, useWindowDimensions, ScrollView } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

import AppColors from "../utils/app-colors";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    const {width, height} = useWindowDimensions();

    let imageSize = 250;

    if (width < 380) {
        imageSize = 150
    }

    if (height < 400) {
        imageSize = 100
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
      <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
          <Title>GAME OVER</Title>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
              source={require("../assets/images/success.png")}
              style={styles.image}
            />
          </View>
          <Text style={styles.summaryText}>
            <Text style={styles.highligh}>{roundsNumber}</Text> rounds were
            needed to guess the number{" "}
            <Text style={styles.highligh}>{userNumber}</Text>.
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
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
        borderColor: AppColors.primary700,
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
        fontSize: 25,
        textAlign: "center",
        color: AppColors.shadow300,
        marginBottom: 25
    },
    highligh: {
        fontFamily: "open-sans-bold",
        fontSize: 30,
        color: AppColors.primary500
    }
})
