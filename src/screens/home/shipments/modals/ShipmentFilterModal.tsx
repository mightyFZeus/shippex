import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../../../../components/shared/Text'
import { globalStyles } from '../../../../styles/globalStyles'
import TouchableComponent from '../../../../components/shared/Touchable'

const ShipmentFilterModal = () => {

    const data = [
        'Received',
        "Putaway",
        'Delivered',
        'Canceled',
        'Rejected',
        'Lost',
        "On Hold"
    ]
    return (
        <View style={[globalStyles.pb3]}>
            <Text color='gray200' font='regular' size='S'>SHIPMENT STATUS</Text>

            <View style={[globalStyles.flexRow, globalStyles.flexWrap, globalStyles.gap10, globalStyles.mt2]}>
                {data.map((item, index) => (
                    <TouchableComponent bounce style={[styles.itemContainer]} key={index}>
                        <Text color='gray200' font='regular' size='L'>{item}</Text>

                    </TouchableComponent>
                ))}
            </View>
        </View>
    )
}

export default ShipmentFilterModal

const styles = StyleSheet.create({

    itemContainer: {
        backgroundColor: "#F4F2F8",
        borderRadius: 10,
        paddingVertical: 10, paddingHorizontal: 14
    }
})