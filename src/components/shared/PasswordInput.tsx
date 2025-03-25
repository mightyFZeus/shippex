import React, { useState } from "react";
import {
    ActivityIndicator,
    NativeSyntheticEvent,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    View,
} from "react-native";
import { AppInputProps, SF_PRO } from "../../types/appTypes";
import { globalStyles } from "../../styles/globalStyles";
import Text from "./Text";
import { getSize } from "../../utils/unitScaling";
import { colors } from "../../theme/themes";
import { FONT_WEIGHTS, FONTS_SIZES } from "../../constants/scaling";
// App Imports


const PasswordInput: React.FC<AppInputProps> = ({
    value,
    onChangeText,
    placeholder,
    style,
    onFocus,
    error,
    errorText,
    label,
    keyboardType,
    rightIcon: RightIcon,
    leftIcon,
    onBlur,
    onEndEditing,
    editable,
    loading,
    maxLength,
    success,
    successText,
    hot,
    networkComponent,
    smallLabel,
    autoFocus,
    // required,
}) => {
    // eslint-disable-line @typescript-eslint/no-unused-vars
    const [focus, setFocus] = useState(false); // eslint-disable-line @typescript-eslint/no-unused-vars
    const changeFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (onFocus) {
            onFocus && onFocus(e);
        }
        setFocus(true);
    };
    const blur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(false);
        if (onBlur) {
            onBlur(e);
        }
    };
    //   To focus input
    const isFilled = value ? true : false;
    const isRightIcon = RightIcon ? true : false;
    const isLeftIcon = leftIcon ? true : false;
    const isError = error ? true : false;

    console.log(value);




    return (
        <View style={[globalStyles.w10, globalStyles.mb15, style]}>
            {label && (
                <Text
                    style={[globalStyles.mb1]}
                    font={FONT_WEIGHTS.medium}
                    size={FONTS_SIZES.S}
                    fontType={SF_PRO}
                    color="gray100">
                    <>{label}</>
                </Text>
            )}
            {smallLabel && (
                <Text
                    style={[globalStyles.mb05, { top: -5 }]}
                    font={FONT_WEIGHTS.regular}
                    size={FONTS_SIZES.XS}
                    fontType={SF_PRO}
                    color="gray100">
                    <>{smallLabel}</>
                </Text>
            )}
            <View
                style={[
                    styles.inputContainer,
                    isFilled && styles.inputFilled,
                    isError && styles.errorBackground,
                    // globalStyles.flexRow,
                    // globalStyles.alignItemsCenter,
                    globalStyles.px15,
                    globalStyles.justifyBetween,
                ]}>
                {isLeftIcon && <>{leftIcon}</>}
                {(focus || isFilled) && (
                    <Text
                        style={[globalStyles.mb05, { top: 8 }]}
                        font={FONT_WEIGHTS.regular}
                        size={FONTS_SIZES.XS}
                        fontType={SF_PRO}
                        color="gray100">
                        {placeholder}
                    </Text>
                )}
                <TextInput
                    autoFocus={autoFocus}
                    value={value}
                    secureTextEntry={true}
                    testID="test-input"
                    onChangeText={val => onChangeText && onChangeText(val)}
                    placeholderTextColor={colors.gray400}
                    placeholder={focus ? "" : placeholder}
                    onBlur={blur}
                    autoCapitalize="none"
                    keyboardType={keyboardType ? keyboardType : "default"}
                    style={[
                        globalStyles.h00,
                        // isLeftIcon && globalStyles.w9,
                        // isRightIcon && globalStyles.w9,
                        // isLeftIcon && isRightIcon && globalStyles.w85,
                        // !isLeftIcon && !isRightIcon && globalStyles.w10,
                        globalStyles.flex,
                        { color: colors.primary }

                    ]}
                    onFocus={changeFocus}
                    onEndEditing={onEndEditing}
                    cursorColor={colors.gray900}
                    editable={editable}
                    maxLength={maxLength}
                />
                {isRightIcon && <>{RightIcon}</>}
            </View>
            <View
                style={[
                    globalStyles.w10,
                    globalStyles.flexRow,
                    globalStyles.alignItemsCenter,
                    globalStyles.justifyBetween,
                    globalStyles.mt05,
                ]}>
                {errorText !== undefined && errorText !== "" && (
                    <Text font={FONT_WEIGHTS.medium} size={FONTS_SIZES.XS} color="danger">
                        {`* ${errorText}`}
                    </Text>
                )}
                {success && !error && (
                    <Text
                        font={FONT_WEIGHTS.medium}
                        size={FONTS_SIZES.XS}
                        color="success">
                        {`* ${successText}`}
                    </Text>
                )}
                {loading && (
                    <ActivityIndicator
                        size="small"
                        color={colors.primary}
                        style={[globalStyles.flexRow, globalStyles.alignSelfEnd]}
                    />
                )}
            </View>
        </View>
    );
};

export default PasswordInput;


const styles = StyleSheet.create({
    inputContainer: {
        height: getSize(56),
        backgroundColor: '#F4F2F880',
        borderRadius: 10,
        color: colors.gray400,
    },


    inputFocused: {
        borderColor: colors.primary,
    },
    inputFilled: {
        borderColor: colors.primary,
        borderWidth: 1,
    },
    errorBackground: {
        borderColor: colors.danger,
        borderWidth: 1,
    },
});
