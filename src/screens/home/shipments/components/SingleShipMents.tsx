import { Image, Pressable, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../../../../styles/globalStyles'
import { colors } from '../../../../theme/themes'
import Checkbox from '../../../../components/shared/Checkbox'
import Text from '../../../../components/shared/Text'
import ArrowRight from '../../../../components/shared/icons/ArrowRight'
import ShipmentStatus from './ShipmentStatus'
import ExpandIcon from '../../../../components/shared/icons/ExpandIcon'
import ExpandedDetails from './ExpandedDetails'
import { useAppSelector } from '../../../../store/hooks'

const SingleShipMents = () => {

    const [expand, setExpand] = useState(false)

    const { markAll } = useAppSelector(state => state.app)

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if (markAll) {
            setSelected(true)
        } else {
            setSelected(false)

        }
    }, [markAll])



    const toggleExpand = () => {
        setExpand(prev => !prev)
    }

    const toggleSelected = () => {
        setSelected(prev => !prev)
    }
    return (
        <View style={[styles.mainContainer, selected && [
            styles.selected
        ]]}>
            <View style={[styles.container]}>
                <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter, { gap: 10 }]}>
                    <Checkbox toggleSwitch={toggleSelected} active={selected} />
                    <Image style={[styles.image]} source={require('../../../../assets/images/box.png')} />
                </View>
                <View>
                    <Text color='black' size='S' font='bold' >
                        AWB
                    </Text>
                    <Text style={[styles.phone]} color='black' size='XL' font='bold' >
                        41785691423
                    </Text>
                    <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter, globalStyles.gap05]}>
                        <Text color='gray100' size='S' font='bold' >
                            Cairo
                        </Text>
                        <ArrowRight />
                        <Text color='gray100' size='S' font='bold' >
                            Alexandria
                        </Text>
                    </View>
                </View>
                <ShipmentStatus status='received' />
                <Pressable onPress={() => toggleExpand()} style={[styles.expandContainer]}>
                    <ExpandIcon />
                </Pressable>
            </View>
            {expand && <ExpandedDetails />}
        </View>
    )
}

export default SingleShipMents

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray500,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 40, height: 40
    },
    phone: {
        fontWeight: 'bold'
    }, expandContainer: {
        backgroundColor: 'white',
        height: 24, width: 24, justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    mainContainer: {
        borderRadius: 10,
        marginTop: 20,
        overflow: 'hidden'

    },
    selected: {
        borderWidth: 1, borderColor: colors.primary
    }
})