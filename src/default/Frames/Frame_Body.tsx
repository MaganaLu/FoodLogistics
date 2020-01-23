import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Home from '../../body/FoodLogisticsBody_Home';
import TestDB from '../../../storage/testDB'
import Activity from '../../body/FoodLogisticsBody_Activity';
import Map from '../../body/FoodLogisticsBody_Map';
import Account from '../../body/FoodLogisticsBody_Account';

type Page = "main" | "activity" | "map" | "account";

type Props = {
	isLoggedIn: true | false;
	page: Page;
};

type State = {
  isLoggedIn: true | false;
  page: Page
};

export default class Frame_Body extends React.Component<Props, State>
{
	state: State = {
		isLoggedIn: this.props.isLoggedIn,
		page: this.props.page
	}

	render() {
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
  