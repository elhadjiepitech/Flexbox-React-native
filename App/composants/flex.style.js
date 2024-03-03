import { StyleSheet } from "react-native";

export const flex = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    box1: {
        width: 120,
        height: 120,
        backgroundColor: "red",
    },
    box2: {
        width: 120,
        height: 120,
        backgroundColor: "green",
    },
    box3: {
        width: 120,
        height: 120,
        backgroundColor: "blue",
    },
});