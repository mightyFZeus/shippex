import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { StyleProp } from "react-native";
import { globalStyles } from "../../styles/globalStyles";

const Divider = ({ style }: { style?: StyleProp<ViewStyle> }) => {
    return <View style={[globalStyles.w10, styles.container, style]} />;
};

export default Divider;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(27, 28, 30, 0.1)",
        height: 0.5,
    },
});
