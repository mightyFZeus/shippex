import React, { ReactNode } from "react";
import {
    ActivityIndicator,
    PressableProps,
    StyleProp,
    StyleSheet,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";

import { iconType } from "../../types/appTypes";
import TouchableComponent from "./Touchable";
import { globalStyles } from "../../styles/globalStyles";
import { colors } from "../../theme/themes";
import Text from "./Text";
import { getSize } from "../../utils/unitScaling";
import MainIcon from "./Icon";
import { BOLD, L, SEMI_BOLD, XL } from "../../constants/scaling";
// App Imports


export interface ButtonProps extends PressableProps {
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
    loading?: boolean;
    leftIcon?: boolean;
    icon?: iconType;
    name?: string;
    children: ReactNode;
    loaderColor?: string;
    rightIcon?: React.ReactNode;
    textStyle?: StyleProp<TextStyle>;
    bounce?: boolean;
    variant: btnVariant
}

type btnVariant =
    | "primary"

    | "white" | 'disabled'

const Button: React.FC<ButtonProps> = ({
    onPress,
    style,
    loading,
    leftIcon,
    icon,
    name,
    children,
    loaderColor,
    disabled,
    rightIcon,
    textStyle,
    bounce,
    variant,
    ...rest
}) => {
    const press = () => {
        if (disabled) return;
        if (onPress) {
            onPress();
            return;
        }
    };
    return (
        <TouchableComponent
            bounce={bounce}
            onPress={press}
            disabled={disabled}
            style={[
                globalStyles.w10,
                globalStyles.flexCenter,
                styles.button,
                variant === "white" && styles.white,
                variant === "disabled" && styles.disabled,

                style,
                { ...rest },
            ]}
            accessibilityRole="button">
            <>
                {loading ? (
                    <ActivityIndicator
                        size={20}
                        color={loaderColor ? loaderColor : colors.white}
                    />
                ) : (
                    <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter]}>
                        {leftIcon && (
                            <MainIcon
                                type={icon as iconType}
                                size={20}
                                color={
                                    colors.primary
                                }
                                name={name as string}
                                style={[globalStyles.pr1]}
                            />
                        )}

                        <Text
                            fontType="sf_pro"
                            size={L}
                            font={BOLD}
                            style={[
                                { color: colors.white, fontWeight: '700' },

                                textStyle,
                                variant === "white" && { color: colors.primary },
                                variant === "disabled" && { color: colors.gray400 },
                            ]}>
                            {children}
                        </Text>
                        {rightIcon && <View style={[globalStyles.ml1]}>{rightIcon}</View>}
                    </View>
                )}
            </>
        </TouchableComponent>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        height: moderateVerticalScale(56, 0.3),
        backgroundColor: colors.primary,
        borderRadius: getSize(10),
    },
    white: {
        backgroundColor: colors.white,
        height: moderateVerticalScale(56, 0.3),
        borderRadius: getSize(10),

    },
    disabled: {
        backgroundColor: '#EAE7F2',
        height: moderateVerticalScale(56, 0.3),
        borderRadius: getSize(10),

    },

});
