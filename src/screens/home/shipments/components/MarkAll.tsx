import { StyleSheet, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../../styles/globalStyles'
import Text from '../../../../components/shared/Text'
import Checkbox from '../../../../components/shared/Checkbox'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { toggleIsMarkAll } from '../../../../appSlice'

const MarkAll = () => {

    const dispatch = useAppDispatch()
    const { markAll } = useAppSelector(state => state.app)
    return (
        <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter, globalStyles.justifyBetween]}>
            <Text style={[styles.shipmentText]} color='black' size='XXL' font='bold' >
                Shipments
            </Text>
            <View style={[globalStyles.flexRow, globalStyles.gap05, globalStyles.alignItemsCenter]}>
                <Checkbox active={markAll as boolean} toggleSwitch={() => {
                    dispatch(toggleIsMarkAll(!markAll))
                }} />
                <Text style={[]} color='primary' size='L' font='bold' >
                    Mark All
                </Text>
            </View>
        </View>
    )
}

export default MarkAll

const styles = StyleSheet.create({
    shipmentText: {
        fontWeight: '700'
    }
})