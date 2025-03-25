import React from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { colors } from "../../theme/themes";
import GlobalView from "./GlobalView";
import { FONT_WEIGHTS, FONTS_SIZES } from "../../constants/scaling";
import { SF_PRO } from "../../types/appTypes";
import Text from "./Text";
import TouchableComponent from "./Touchable";
import MainIcon from "./Icon";
import { getSize } from "../../utils/unitScaling";
import Divider from "./Divider";
// App Imports
// import {colors} from 'styles/colors';
// import TouchableComponent from 'components/common/touchable/TouchableComponent';

interface TransactionModalViewsProps extends ViewProps {
    closeModal: () => void;
    style?: StyleProp<ViewStyle>;
    hideIcon?: boolean;
    title?: string;
    hideHeader?: boolean;
    showRectangle?: boolean;
    isKeyboardVisible?: boolean;
    centerTitle?: boolean;

}

const GeneralModalViews: React.FC<TransactionModalViewsProps> = ({
    closeModal,
    style,
    children,
    hideIcon,
    title,
    hideHeader,
    showRectangle,
    isKeyboardVisible,
    centerTitle,
}) => {
    return (
        <View
            style={[
                styles.generalBottomModalViewStyle,
                globalStyles.absolute,
                !hideHeader && globalStyles.py1,
                globalStyles.pb2,
                style,
                isKeyboardVisible && {
                    bottom: 180,
                },
            ]}>
            {showRectangle && (
                <GlobalView
                    bg={colors.gray400}
                    style={[
                        globalStyles.flexCenter,
                        globalStyles.alignSelfCenter,
                        globalStyles.flexZero,
                        globalStyles.br8,
                        hideHeader && globalStyles.mt0,
                        { width: 36, height: 6 },
                    ]}
                />
            )}
            {!hideHeader && (
                <View
                    style={[
                        globalStyles.w10,
                        globalStyles.px3,

                        globalStyles.flexRow,
                        globalStyles.alignItemsCenter,
                        globalStyles.justifyBetween,
                        globalStyles.mt25,
                    ]}>
                    <TouchableComponent onPress={closeModal}>
                        <Text
                            style={[centerTitle && globalStyles.textCenter, { fontWeight: '500' }]}
                            font={FONT_WEIGHTS.bold}
                            color="primary"
                            fontType={SF_PRO}
                            size={FONTS_SIZES.L}
                            lineHeight={18}>
                            Cancel
                        </Text>
                    </TouchableComponent>
                    <Text
                        style={[centerTitle && globalStyles.textCenter, styles.title]}
                        font={FONT_WEIGHTS.bold}
                        fontType={SF_PRO}
                        size={FONTS_SIZES.XL}
                        lineHeight={18}>
                        {title}
                    </Text>
                    <TouchableComponent onPress={closeModal}>
                        <Text
                            color="primary"

                            style={[centerTitle && globalStyles.textCenter, { fontWeight: '500' }]}
                            font={FONT_WEIGHTS.bold}
                            fontType={SF_PRO}
                            size={FONTS_SIZES.L}
                            lineHeight={18}>
                            Done
                        </Text>

                    </TouchableComponent>

                </View>
            )}
            <Divider style={[styles.divider]} />

            {/* Content */}
            <View style={[globalStyles.w10,

            globalStyles.px3,

            ]}>{children}</View>
        </View>
    );
};

export default GeneralModalViews;


const styles = StyleSheet.create({
    generalBottomModalViewStyle: {
        bottom: 0,
        backgroundColor: colors.white,
        width: "100%",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    title: {
        fontWeight: '600'
    }, divider: {
        height: 1, backgroundColor: '#EAE7F2',
        marginVertical: 20
    }
})