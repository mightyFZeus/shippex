import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import SearchInput from '../../../../components/shared/SearchInput'
import { globalStyles } from '../../../../styles/globalStyles'
import { colors } from '../../../../theme/themes'
import FilterIcon from '../../../../components/shared/icons/FilterIcon'
import Text from '../../../../components/shared/Text'
import AddScanIcon from '../../../../components/shared/icons/AddScanIcon'
import TouchableComponent from '../../../../components/shared/Touchable'
import GeneralModal from '../../../../components/shared/Modal'
import GeneralModalViews from '../../../../components/shared/GeneralModalView'
import ShipmentFilterModal from '../modals/ShipmentFilterModal'

const ShipmentsActions = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(prev => !prev)
    }
    return (
        <View style={[globalStyles.mt2]}>
            <SearchInput />
            <View style={[globalStyles.mt2, globalStyles.alignItemsCenter, globalStyles.justifyBetween, globalStyles.flexRow]}>
                <TouchableComponent onPress={toggleModal} bounce style={[styles.filterContainer]}>
                    <FilterIcon />
                    <Text color='black60' size='L' font='bold' >
                        Filters
                    </Text>
                </TouchableComponent>
                <TouchableComponent bounce style={[styles.filterContainer, { backgroundColor: colors.primary }]}>
                    <AddScanIcon />
                    <Text color='white' size='L' font='bold' >
                        Add Scan
                    </Text>
                </TouchableComponent>
            </View>


            <GeneralModal swipeDirection='down' onSwipeComplete={toggleModal} visible={modal} closeModal={toggleModal}>
                <GeneralModalViews
                    showRectangle
                    title="Filters"
                    closeModal={toggleModal}>
                    <ShipmentFilterModal />
                </GeneralModalViews>
            </GeneralModal>
        </View>
    )
}

export default ShipmentsActions

const styles = StyleSheet.create({
    filterContainer: {
        backgroundColor: colors.gray500,
        paddingHorizontal: 18, paddingVertical: 10,
        width: '48%',
        borderRadius: 10, alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5
    }
})