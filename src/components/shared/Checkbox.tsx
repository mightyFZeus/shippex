import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import TouchableComponent from './Touchable';
import { colors } from '../../theme/themes';
import MainIcon from './Icon';

const Checkbox = ({
    active,
    toggleSwitch,
    activeColor,
    borderColor,
    style,
}: {
    active: boolean;
    toggleSwitch: () => void;
    borderColor?: string;
    activeColor?: string;
    size?: number;
    style?: StyleProp<ViewStyle>;

    activeSize?: number;
}) => {
    return (
        <TouchableComponent
            style={[
                styles.container,
                style,
                { height: 20, width: 20 },
                active && { backgroundColor: '#d8e6fd', borderColor: colors.primary },
                !active && { borderColor: '#D0D5DD' },
            ]}
            bounce
            onPress={toggleSwitch}>
            {active && (
                <MainIcon
                    name="check"
                    type="AntDesign"
                    color={colors.primary}
                    size={14}
                />
            )}
        </TouchableComponent>
    );
};

export default Checkbox;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {

        borderRadius: 50,
    },
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 50,
    },
});
