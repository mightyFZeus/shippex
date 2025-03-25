import React, { FC, PropsWithChildren } from "react";
import { StyleProp, Text as RNText, TextProps, TextStyle } from "react-native";
import { colorType } from "../../theme/themes";
import { fontWeightType, textSizes, SF_PRO, fontType } from '../../types/appTypes';
import { getTextColor, getTextFont, getTextSize } from "../../utils/unitScaling";

interface MainTextProps extends TextProps, PropsWithChildren {
    color?: colorType;
    style?: StyleProp<TextStyle>;
    size: textSizes;
    font: fontWeightType;
    fontType?: fontType;
    children: React.ReactNode;
    lineHeight?: number;
}
const Text: FC<MainTextProps> = ({
    children,
    style,
    size,
    color,
    font,
    fontType = SF_PRO,
    lineHeight,
    ...rest
}) => {
    return (
        <RNText
            selectionColor="#303235"
            style={[
                {
                    fontFamily: getTextFont(fontType, font),
                    fontSize: getTextSize(size),
                    color: getTextColor(color as colorType),
                    lineHeight,
                },
                style,
            ]}
            {...rest}>
            {children}
        </RNText>
    );
};

export default Text;
