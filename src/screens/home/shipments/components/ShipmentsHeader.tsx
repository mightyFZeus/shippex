import {
    Image, StyleSheet
    , View
} from 'react-native';
import React from 'react';
import { globalStyles } from '../../../../styles/globalStyles';
import BlueIcon from '../../../../components/shared/icons/BlueIcon';
import NofificationIcon from '../../../../components/shared/icons/NofificationIcon';
import Text from '../../../../components/shared/Text';

const ShipmentsHeader = () => {
    return (
        <View>
            <View
                style={[
                    globalStyles.flexRow,
                    globalStyles.alignItemsCenter,
                    globalStyles.justifyBetween,
                ]}>
                <Image
                    style={[styles.image]}
                    source={require('../../../../assets/images/profile_image.png')}
                />
                <BlueIcon />
                <View style={[styles.notiIconContainer]}>
                    <NofificationIcon />
                </View>
            </View>
            <View style={[globalStyles.mt2]}>
                <Text color='black60' size='S' font='bold' >
                    Hello,
                </Text>
                <Text style={[styles.name]} color='black' size='XXXL' font='bold' >
                    Ibrahim Shaker
                </Text>

            </View>
        </View>
    );
};

export default ShipmentsHeader;

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    notiIconContainer: {
        backgroundColor: '#F4F2F8',
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontWeight: '600',
        marginTop: 5
    }
});
