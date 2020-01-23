import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Home from '../../body/FoodLogisticsBody_Home';
import DBButtons from '../../../storage/SQLLite/dbButtons'
import ASYNCButtons from '../../../storage/AsyncStorage/asyncButtons'

import Activity from '../../body/FoodLogisticsBody_Activity';
import Map from '../../body/FoodLogisticsBody_Map';
import Account from '../../body/FoodLogisticsBody_Account';

export type UserID = string | null;

type Page = "main" | "activity" | "map" | "account";

type Props = {
	isLoggedIn: true | false;
    page: Page;
    uID: UserID;
    onUserStatusChange: () => Promise<void>;
};

export default class Frame_Body extends React.Component<Props>
{

	render() {
		if (this.props.page == "main") {
            return (
                <ASYNCButtons 
                    isLoggedIn = {this.props.isLoggedIn} 
                    uID = {this.props.uID}
                    onUserStatusChange = {this.props.onUserStatusChange}
                />
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
  