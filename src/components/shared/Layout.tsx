import React, { FC, PropsWithChildren } from 'react';
import {
    StatusBar,
    StyleProp,
    //  useColorScheme,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../styles/globalStyles';

interface LayoutProps extends ViewProps, PropsWithChildren {
    noPadding?: boolean;
    hideBg?: boolean;
    style?: StyleProp<ViewStyle>;
    bgColor?: string;
}
const Layout: FC<LayoutProps> = ({
    children,
    bgColor,
    style,
    noPadding,
    hideBg,
}) => {

    const backgroundStyle = {
        backgroundColor: bgColor,
    };
    return (
        <SafeAreaView
            style={[
                !hideBg && backgroundStyle,
                globalStyles.flex,
                globalStyles.relative,
            ]}>
            <View style={[globalStyles.flex, !noPadding && globalStyles.px2, globalStyles.mt2, style]}>
                <StatusBar translucent />

                {children}
            </View>
        </SafeAreaView>
    );
};

export default Layout;
