import React, { useEffect, useRef, useState } from "react";
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { AppInputProps } from "../../types/appTypes";
import { globalStyles } from "../../styles/globalStyles";
import { colors } from "../../theme/themes";
import TouchableComponent from "./Touchable";
import MainIcon from "./Icon";
import { getSize } from "../../utils/unitScaling";
import SearchIcon from "./icons/SearchIcon";


interface SearchInputProps extends AppInputProps {
    style?: StyleProp<ViewStyle>;
    onRightIconPress?: () => void;
    showFilter?: boolean;
    data?: string[];
    whiteBg?: boolean;
    editable?: boolean;
    toggleSearchMode?: () => void;
    searchMode?: boolean;
    autoFocus?: boolean;
    noCancel?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChangeText,
    placeholder,
    style,
    rightIcon,
    onRightIconPress,
    showFilter,
    data,
    whiteBg,
    editable = true,
    toggleSearchMode,
    searchMode,
    autoFocus = false,
    noCancel,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const changeFocus = () => {
        setIsFocused(true);
    };
    const changeBlur = () => {
        setIsFocused(false);
    };

    useEffect(() => {
        if (isFocused && toggleSearchMode) {
            toggleSearchMode();
        }
    }, [isFocused]);

    useEffect(() => {
        if (!searchMode && toggleSearchMode) {
            setIsFocused(false);
        }
    }, [searchMode]);

    const inputRef = useRef<TextInput>(null);

    return (
        <View
            style={[
                globalStyles.w10,
                globalStyles.flexRow,
                globalStyles.alignItemsCenter,
                styles.inputContainer,
                isFocused && styles.inputFocused,
                globalStyles.px15,
                style,
                whiteBg && { backgroundColor: colors.white },
                globalStyles.justifyBetween,
            ]}>
            {!isFocused && <SearchIcon />}
            <TextInput
                ref={inputRef}
                autoFocus={autoFocus}
                editable={editable}
                value={value}
                onChangeText={val => onChangeText && onChangeText(val)}
                placeholderTextColor={colors.gray400}
                placeholder={placeholder || "Search "}
                style={[
                    globalStyles.w9,
                    globalStyles.h00,
                    globalStyles.ml05,
                    { color: colors.black, fontFamily: "SF_PRO" },
                ]}
                onFocus={changeFocus}
                onBlur={changeBlur}
            />
            {isFocused && !noCancel && (
                <TouchableComponent
                    onPress={() => {
                        if (onChangeText) {
                            onChangeText("");
                        }
                    }}>
                    <MainIcon
                        name="closecircleo"
                        type="AntDesign"
                        color={colors.gray400}
                        size={20}
                    />
                </TouchableComponent>
            )}

            <TouchableComponent
                onPress={() => {
                    if (onRightIconPress) {
                        onRightIconPress();
                    }
                }}
                style={[globalStyles.relative, { right: isFocused ? -4 : 20 }]}>
                {rightIcon}
            </TouchableComponent>
        </View>
    );
};

export default SearchInput;


const styles = StyleSheet.create({
    inputContainer: {
        height: getSize(44),
        backgroundColor: '#F4F2F8',
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