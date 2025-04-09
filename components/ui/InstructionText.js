import { StyleSheet, Text } from "react-native";

import AppColors from "../../constants/app-colors";

function InstructionText({children}) {
    return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: AppColors.secondary500,
        fontSize: 25
      },
})
