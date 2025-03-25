import { StyleSheet, View } from 'react-native'
import React from 'react'
import SingleAddress from './SingleAddress'
import BigRightArrow from '../../../../components/shared/icons/BigRightArrow';
import ContactActions from './ContactActions';

const ExpandedDetails = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.addContainer]} >
                <SingleAddress address='Dokki, 22 Nile St.' city='Cairo' header='Origin' />
                <BigRightArrow />
                <SingleAddress address='Smoha, 22 max St.' city='Alexandria' header='Destination' />
            </View>
            <ContactActions />
        </View>
    )
}

export default ExpandedDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F2F880',
        borderTopWidth: 1, borderTopColor: 'white',
        padding: 12,

    },
    addContainer: {
        flexDirection: 'row',

        justifyContent: 'space-between',
        alignItems: 'center'
    }

})