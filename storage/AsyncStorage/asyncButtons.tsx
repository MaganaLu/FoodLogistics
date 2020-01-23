/**
 * Use this component to test asyncStorage stuff
 */

import React from "react";
import { AsyncStorage, Button, View, Text } from "react-native";

import { logOut, logIn } from "./asyncDB";

type UserID = string | null;

type LocalStorage = {
  uID: UserID;
};

type Props = {
  isLoggedIn: boolean;
  uID: UserID;
  onUserStatusChange: () => Promise<void>;
};

export default class ASYNCButtons extends React.Component<Props> {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <View>
          <Text>{this.props.uID}</Text>
          <Button title="Press me to log out" onPress={this._handleClick} />
        </View>
      );
    } else {
      return (
        <View>
          <Text>{this.props.uID}</Text>
          <Button title="Press me to log in" onPress={this._handleClick} />
        </View>
      );
    }
  }

  _handleClick = async () => {
    if (this.props.isLoggedIn) {
      logOut().then(() => this.props.onUserStatusChange());
    } else {
      let user: LocalStorage = {
        uID: "thisisakey"
      };
      logIn(user).then(() => this.props.onUserStatusChange());
    }
  };
}
