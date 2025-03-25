import { View, FlatList } from 'react-native';
import React from 'react';
import { globalStyles } from '../../../../styles/globalStyles';
import MarkAll from './MarkAll';
import SingleShipMents from './SingleShipMents';

const ShipmentsSection = () => {
    return (
        <View style={[globalStyles.mt3]}>
            <MarkAll />
            <FlatList
                keyExtractor={() => `${Math.random() * 10}`}
                showsVerticalScrollIndicator={false}
                data={Array.from({ length: 6 })}
                contentContainerStyle={{
                    paddingBottom: 300,
                }}
                renderItem={() => <SingleShipMents />}
            />
        </View>
    );
};

export default ShipmentsSection;
