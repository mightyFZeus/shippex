import { StyleSheet, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../../styles/globalStyles'

import TouchableComponent from '../../../../components/shared/Touchable'
import Text from '../../../../components/shared/Text'
import { contactData } from '../../../../../data/data'

const ContactActions = () => {


    return (
        <View style={[globalStyles.mt3, globalStyles.alignSelfEnd, globalStyles.flexRow, globalStyles.gap10]}>
            {contactData.map(({ bgColor, icon: Icon, text }, index) => (
                <TouchableComponent bounce style={[{ backgroundColor: bgColor }, styles.item, globalStyles.flexRow, globalStyles.alignItemsCenter, globalStyles.gap10]} key={index}>
                    <Icon />
                    <Text color='white' size='XL' font='bold' >
                        {text}
                    </Text>
                </TouchableComponent>
            ))}
        </View>
    )
}

export default ContactActions

const styles = StyleSheet.create({
    item: {
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 14
    }
})