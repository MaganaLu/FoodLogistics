import React from 'react';
import { Text, View, NativeModules } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class FoodLogisticsBumper extends React.Component
{
    render () {
        return (
            <View style = {{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name='truck' size={100}/>
                <Text>Food Logistics</Text>
            </View>
        )
    }
}

