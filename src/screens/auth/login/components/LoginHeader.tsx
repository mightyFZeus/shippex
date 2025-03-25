import { StyleSheet, View } from 'react-native';
import React from 'react';
import Text from '../../../../components/shared/Text';
import { globalStyles } from '../../../../styles/globalStyles';
import MainIcon from '../../../../components/shared/Icon';
import { colors } from '../../../../theme/themes';
import TouchableComponent from '../../../../components/shared/Touchable';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationProp } from '../../../../navigationTypes/navigationTypes';

const LoginHeader = () => {
    const navigation = useNavigation<AuthStackNavigationProp>();
    return (
        <View>
            <TouchableComponent
                onPress={() => navigation.goBack()}
                style={[
                    globalStyles.flexRow,
                    globalStyles.alignItemsCenter,


                ]}>
                <View style={{ left: -8 }}>
                    <MainIcon
                        color={colors.primary}
                        name="chevron-back"
                        type="Ionicons"
                        size={24}
                    />
                </View>
                <Text color="primary" font="regular" size="L">
                    Cancel
                </Text>
            </TouchableComponent>

            <Text style={[styles.headerText]} font="bold" size="XXXL" color="black">
                Login
            </Text>
            <Text style={[styles.descText]} font="bold" size="L" color="gray100">
                Please enter your First, Last name and your phone number in order to register
            </Text>
        </View>
    );
};

export default LoginHeader;

const styles = StyleSheet.create({
    headerText: {
        fontWeight: '700',
        marginTop: 20
    },
    descText: {
        marginTop: 15,
        lineHeight: 24,
        letterSpacing: -0.41,
        fontWeight: '400'

    }
});
