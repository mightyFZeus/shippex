import { View, Text } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BigRightArrow = () => {
    return (
        <Svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
        >
            <Path
                d="M10.8333 1L17.5 8M17.5 8L10.8333 15M17.5 8L1.5 8"
                stroke="#2F50C1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default BigRightArrow;
