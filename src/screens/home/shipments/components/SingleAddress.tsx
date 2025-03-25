import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../../../../components/shared/Text';
import { globalStyles } from '../../../../styles/globalStyles';


interface ISingleAddress {
    header: string
    city: string;
    address: string
}
const SingleAddress: React.FC<ISingleAddress> = ({ address, city, header }) => {
    return (
        <View>
            <View style={[{ gap: 3.5 }]}>
                <Text color='primary' size='L' font='bold' >
                    {header}
                </Text>
                <Text color='black' size='XXL' font='bold' >
                    {city}
                </Text>
                <View style={[globalStyles.flexRow, globalStyles.alignItemsCenter, globalStyles.gap05]}>
                    <Text color='gray200' size='L' font='bold' >
                        {address}
                    </Text>

                </View>
            </View>
        </View>
    )
}

export default SingleAddress

const styles = StyleSheet.create({})