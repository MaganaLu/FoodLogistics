import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

import FoodLogisticsBumper from "./default/FoodLogisticsBumper";
import FoodLogisticsFrame from "./default/FoodLogisticsFrame";
import { getUID, isLoggedIn } from "../storage/AsyncStorage/asyncDB";

type UserID = string | null;

type LocalStorage = {
  uID: string | null;
};

// * tsx types
type State = {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: LocalStorage | null;
};

export default class FoodLogisticsApp extends React.Component {
  state: State = {
    isLoading: true,
    isLoggedIn: false,
    user: null
  };

  async componentDidMount(): Promise<void> {
    await this._initUser();
    setTimeout(() => this.setState({ isLoading: false }), 3000);
  }

  render() {
    console.log('log (Root):', this.state.isLoggedIn)
    if (this.state.isLoading) {
      return <FoodLogisticsBumper />;
    } else {
      return (
        <View style={styles.container}>
          <FoodLogisticsFrame
            uID={this.state.user.uID}
            isLoggedIn={this.state.isLoggedIn}
            onUserStatusChange={this._onUserStatusChange}
          />
        </View>
      );
    }
  }

  // * Returns uID if the user is logged in
  _initUser = async (): Promise<void> => {
    let status: boolean = false;
    let store: LocalStorage = {
      uID: null
    };
    try {
      status = await isLoggedIn();
      if (status) {
        try {
          store.uID = await getUID();
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
    this.setState({ isLoggedIn: status, user: store });
  };

  // * refresh user status
  _onUserStatusChange = async (): Promise<void> => {
    await this._initUser();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center"
  }
});
