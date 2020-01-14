import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { FontAwesome, Ionicons, Feather, AntDesign } from "@expo/vector-icons";

const MainButton = props => (
  <Button
    buttonStyle={{ flexDirection: "column", justifyContent: "space-between" }}
    type="clear"
    {...props}
    titleStyle={{ color: "black", fontSize: 15 }}
  />
);

type Page = 1 | 2 | 3 | 4;

type Props = {
  isLoggedIn: true | false;
  page: Page;
  onPageChange: (page: Page) => void;
};

type State = {
  isLoggedIn: true | false;
  page: Page;
};

export default class Frame_Footer extends React.Component<Props, State> {
  state: State = {
    isLoggedIn: this.props.isLoggedIn,
    page: this.props.page
  };

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
              this.setState({ page: 1 });
              this.props.onPageChange(1);
            }}
            icon={<AntDesign name="home" size={20} />}
            title="Main"
          />
        </View>

        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
							this.setState({ page: 2 });
							this.props.onPageChange(2);
            }}
            icon={<Feather name="activity" size={20} />}
            title="Activity"
          />
        </View>

        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
							this.setState({ page: 3 });
							this.props.onPageChange(3);
            }}
            icon={<FontAwesome name="map-o" size={20} />}
            title="Map"
          />
        </View>

        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
							this.setState({ page: 4 });
							this.props.onPageChange(4);
            }}
            icon={<AntDesign name="user" size={20} />}
            title="Account"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
