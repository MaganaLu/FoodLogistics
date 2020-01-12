/**
 * Can this be a router?
 */

import React from 'react';
import { Text } from 'react-native';

import Home from './FoodLogisticsBody_Home';
import Activity from './FoodLogisticsBody_Activity';
import Map from './FoodLogisticsBody_Map';
import Account from './FoodLogisticsBody_Account';

type Props = {
    page: 1 | 2 | 3 | 4;
}

export default class AppBody extends React.Component<Props> {

    render () {

        if (this.props.page == 1) {
            return (
                <Home/>
            )
        }

        else if (this.props.page == 2) {
            return (
                <Activity/>
            )
        }

        else if (this.props.page == 3) {
            return (
                <Map/>
            )
        }

        else if (this.props.page == 4) {
            return (
                <Account/>
            )
        }

        else {
            return (
                <Text>Ahh it broke!</Text>
            )
        }
    }   

}
