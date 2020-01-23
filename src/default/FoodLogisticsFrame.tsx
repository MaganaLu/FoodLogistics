import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Header from "./Frames/Frame_Header"
import Body from "./Frames/Frame_Body"
import Footer from "./Frames/Frame_Footer"

type UserID = string | null;

type Page = "main" | "activity" | "map" | "account";

type Props = {
  isLoggedIn: boolean;
  uID: UserID;
  onUserStatusChange: () => Promise<void>;
};

type State = {
  page: Page;
};

export default class FoodLogisticsFrame extends React.Component<Props, State> 
{
  state: State = {
    page: "main"
  };


  render() {
    console.log('log (Frame):', this.props.isLoggedIn)
    return (
      <View style={styles.container}>
        
				<Header/>
        
        <View style={styles.body}>
          <Body 
            page = {this.state.page} 
            isLoggedIn = {this.props.isLoggedIn} 
            uID = {this.props.uID} 
            onUserStatusChange = {this.props.onUserStatusChange} />
        </View>

				<Footer page = {this.state.page} isLoggedIn = {this.props.isLoggedIn} onPageChange = {this._onPageChange}/>

			</View>
		);			
	}

	_onPageChange = (p: Page): void => {
		this.setState({page: p});
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
