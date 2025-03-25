import { StyleSheet, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigationParams } from '../navigationTypes/navigationTypes';
import Shipments from '../screens/home/shipments/Shipments';
import { PROFILE, SCAN, SHIPMENT, WALLET } from '../constants/constants';
import Scan from '../screens/home/scan/Scan';
import Wallet from '../screens/home/wallet/Wallet';
import Profile from '../screens/home/profile/Profile';
import { colors } from '../theme/themes';
import { ifIphoneX } from "react-native-iphone-x-helper";
import { FONT_FAMILY, FONTS_SIZES } from '../constants/scaling';
import { getTextSize } from '../utils/unitScaling';
import ShipmentsIcon from '../components/shared/icons/ShipmentsIcon';
import ScanIcon from '../components/shared/icons/ScanIcon';
import WalletIcon from '../components/shared/icons/WalletIcon';
import ProfileIcon from '../components/shared/icons/ProfileIcon';


const BottomTab = () => {

    const Tab = createBottomTabNavigator<TabNavigationParams>();
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: [
                    styles.tabBarStyle,
                ],
                headerShown: false,
                tabBarInactiveTintColor: colors.gray400,
                tabBarActiveTintColor: colors.primary,
            }}>
            <Tab.Screen

                options={{
                    tabBarLabel: SHIPMENT,
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ color, focused }) => (
                        <ShipmentsIcon color={color} focused={focused} />
                    ),
                }}
                component={Shipments} name={SHIPMENT} />
            <Tab.Screen
                options={{
                    tabBarLabel: SCAN,
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ color, focused }) => (
                        <ScanIcon color={color} focused={focused} />
                    ),
                }}
                component={Scan} name={SCAN} />
            <Tab.Screen
                options={{
                    tabBarLabel: WALLET,
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ color, focused }) => (
                        <WalletIcon color={color} focused={focused} />
                    ),
                }}
                component={Wallet} name={WALLET} />
            <Tab.Screen

                options={{
                    tabBarLabel: PROFILE,
                    tabBarLabelStyle: styles.tabLabelStyle,
                    tabBarIcon: ({ color, focused }) => (
                        <ProfileIcon color={color} focused={focused} />
                    ),
                }} component={Profile} name={PROFILE} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: colors.white,
        height: 100,
        paddingTop: 10,
        borderTopWidth: 1, borderTopColor: '#EAE7F2',

        ...Platform.select({
            ios: {
                ...ifIphoneX(
                    {
                        height: 85,
                    },
                    {
                        height: 90,
                    },
                ),
            },
            android: {
                height: 90,
            },
        }),


        ...Platform.select({
            ios: {
                ...ifIphoneX(
                    {
                        paddingBottom: 20,
                    },
                    {
                        paddingBottom: 20,
                    },
                ),
            },
            android: {
                paddingBottom: 10,
            },
        }),

        ...Platform.select({
            ios: {
                ...ifIphoneX(
                    {
                        bottom: 30,
                    },
                    {
                    },
                ),
            },

        }),
        elevation: 14,
    },
    tabLabelStyle: {
        fontFamily: FONT_FAMILY.sf_pro.medium,
        textTransform: "capitalize",
        fontSize: getTextSize(FONTS_SIZES.XS),
        marginBottom: 0,
        marginTop: 10
        // top: -10,
    },
})