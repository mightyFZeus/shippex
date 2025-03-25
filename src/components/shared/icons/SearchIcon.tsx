import { View, Text } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = () => {
    return (
        <Svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <Path
                d="M14.927 15.0401L18.4001 18.4001M17.2801 9.4401C17.2801 13.77 13.77 17.2801 9.4401 17.2801C5.11019 17.2801 1.6001 13.77 1.6001 9.4401C1.6001 5.11019 5.11019 1.6001 9.4401 1.6001C13.77 1.6001 17.2801 5.11019 17.2801 9.4401Z"
                stroke="#A7A3B3"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </Svg>
    );
};

export default SearchIcon;
