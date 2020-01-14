import React from "react";
import { Text, View, StyleSheet } from "react-native";

import AppBody from "../../body/FoodLogisticsBody";

type Page = "main" | "activity" | "map" | "account";

type Props = {
	isLoggedIn: true | false;
	page: Page
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
		return (
			<View style={styles.body}>
          <AppBody page={this.props.page} />
			</View>
		)
	}
}

const styles = StyleSheet.create(
{
    body: {
      flex: 8,
      justifyContent: "center",
      alignSelf: "center"
    }
});
  