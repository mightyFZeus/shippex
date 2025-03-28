import { View, Text } from 'react-native';
import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { BottomTabIconProps } from '../../../types/appTypes';
import { colors } from '../../../theme/themes';

const ScanIcon = ({ color, focused, size }: BottomTabIconProps) => {
    const isFocused = focused ? color : colors.gray400;
    return (
        <Svg
            width="32"
            height="25"
            viewBox="0 0 32 25"
            fill="none"
        >
            <G clip-path="url(#clip0_1_416)">
                <Path
                    d="M0.784536 0H5.50682V1.2263H1.39769V4.43116H0.171387V0.613149C0.171387 0.27566 0.447046 0 0.784536 0ZM4.78804 4.18127H6.91603V20.8187H4.78804V4.18127ZM18.0532 4.18127H19.5732V20.8187H18.0532V4.18127ZM15.1085 4.18127H16.2472V20.8187H15.1085V4.18127ZM8.72199 4.18127H9.36863V20.8187H8.72199V4.18127ZM25.3131 4.18127H27.2118V20.8187H25.3131V4.18127ZM21.3791 4.18127H23.5071V20.8187H21.3791V4.18127ZM11.1746 4.18127H13.3026V20.8187H11.1746V4.18127ZM1.39769 20.5688V23.7737H5.50682V25H0.784536C0.447046 25 0.171387 24.7269 0.171387 24.3869V20.5688H1.39769ZM26.8099 0H31.2153C31.5528 0 31.8284 0.27566 31.8284 0.613149V4.43116H30.6021V1.2263H26.8099V0ZM31.8284 20.5688V24.3869C31.8284 24.7243 31.5528 25 31.2153 25H26.8099V23.7737H30.6021V20.5688H31.8284Z"
                    fill={isFocused}
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_416">
                    <Rect
                        width="31.6571"
                        height="25"
                        fill="white"
                        transform="translate(0.171387)"
                    />
                </ClipPath>
            </Defs>
        </Svg>
    );
};

export default ScanIcon;
