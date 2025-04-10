import { useWindowDimensions } from "react-native"

function AppDimensions () {

    const { width, height } = useWindowDimensions()

    const deviceWidth = width
    const deviceHeight = height
    
    console.log("Device width ---> " + deviceWidth)
    console.log("Device height ---> " + deviceHeight)
}

export default AppDimensions;