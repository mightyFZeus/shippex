import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LightLogoIcon from '../shared/icons/LightLogoIcon'
import { globalStyles } from '../../styles/globalStyles'
import Button from '../shared/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthStackNavigationProp } from '../../navigationTypes/navigationTypes'

const HomeView = () => {
    const navigation = useNavigation<AuthStackNavigationProp>()

    return (
        <View style={[globalStyles.relative, { height: "100%", justifyContent: 'center' }]}>
            <View style={[globalStyles.alignSelfCenter, { top: -35 }]}>
                <LightLogoIcon />
            </View>
            <Button onPress={() => navigation.navigate('login')} style={[styles.button]} variant='white' >
                Login
            </Button>
        </View>
    )
}

export default HomeView


const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    button: {
        position: 'absolute',
        bottom: 40
    }
})