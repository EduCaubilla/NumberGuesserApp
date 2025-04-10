import { StyleSheet, Text } from "react-native";

import AppColors from "../../constants/app-colors";

function InstructionText({children, style}) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: "open-sans",
        color: AppColors.secondary500,
        fontSize: 25
      },
})
