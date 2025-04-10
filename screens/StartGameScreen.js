import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

import AppColors from "../utils/app-colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(inputText) {
    setEnteredNumber(inputText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        { text: "Ok", style: "default", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
    console.log("Valid number inserted --------> " + chosenNumber);
  }

  const marginTopDistance = height < 380 ? 35 : 100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
        <Title>Choose a number to guess</Title>
        <Card>
          <InstructionText>Enter a number</InstructionText>
          <TextInput
            style={styles.numberInput}
            selectionColor={AppColors.secondary500}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: AppColors.secondary700,
    borderBottomWidth: 2,
    color: AppColors.secondary700,
    marginVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
