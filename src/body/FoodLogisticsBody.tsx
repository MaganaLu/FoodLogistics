/**
 * Can this be a router?
 */

import React from 'react';
import { Text, View } from 'react-native';

import Home from './FoodLogisticsBody_Home';
import Activity from './FoodLogisticsBody_Activity';
import Map from './FoodLogisticsBody_Map';
import Account from './FoodLogisticsBody_Account';

type Page = "main" | "activity" | "map" | "account";

type Props = {
    page: Page;
}

export default class AppBody extends React.Component<Props> {

    render () {

        if (this.props.page == "main") {
            return (
                <Home/>
            )
        }

        else if (this.props.page == "activity") {
            return (
                <Activity/>
            )
        }

        else if (this.props.page == "map") {
            return (
                <Map/>
            )
        }

        else if (this.props.page == "account") {
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
