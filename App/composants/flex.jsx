import {flex} from "./flex.style";
import { View } from "react-native";

function Flex() {
    return (
        <View style={flex.container}>
            <View style={flex.box1}></View>
            <View style={flex.box2}></View>
            <View style={flex.box3}></View>
        </View>
    );
}

export default Flex;