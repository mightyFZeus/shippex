import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../theme/themes'
import { globalStyles } from '../../../../styles/globalStyles'
import Text from '../../../../components/shared/Text'

const ShipmentStatus = ({ status }: { status: string }) => {
    return (
        <View style={[styles.container]}>

            <Text style={[globalStyles.textUppercase]} color='primary' size='S' font='bold' >
                {status}
            </Text>
        </View>
    )
}

export default ShipmentStatus

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9E6FD',
        borderColor: colors.white,
        borderWidth: 1, borderRadius: 4,
        paddingHorizontal: 6, paddingVertical: 4
    }
})