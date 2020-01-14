import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { FontAwesome, Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import AppBody from "../../body/FoodLogisticsBody";

type Page = 1 | 2 | 3 | 4;

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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingBottom: 20
    },
  
    header: {
      flex: 1,
      flexDirection: "row"
    },
  
    header_Menu: {
      flex: 1,
      alignContent: "center",
      justifyContent: "center"
    },
  
    header_Title: {
      flex: 3,
      alignContent: "center",
      justifyContent: "center"
    },
  
    header_Settings: {
      flex: 1,
      alignContent: "center",
      justifyContent: "center"
    },
  
    body: {
      flex: 8,
      justifyContent: "center",
      alignSelf: "center"
    },
  
    footer: {
      flex: 1,
      flexDirection: "row"
    },
  
    footer_Button: {
      flex: 1,
      borderColor: "black",
      borderTopWidth: 0.5
    }
  });
  