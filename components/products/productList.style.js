import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        alignItems: "center",
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small / 2,
        width: "100%"
    },
    separator: {
        height: 16
    }
});

export default styles;