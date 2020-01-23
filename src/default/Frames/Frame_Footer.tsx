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

type Page = "main" | "activity" | "map" | "account";

type Props = {
  isLoggedIn: true | false;
  page: Page;
  onPageChange: (page: Page) => void;
};

export default class Frame_Footer extends React.Component<Props> {

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
              this.props.onPageChange("main");
            }}
            icon={<AntDesign name="home" size={20} />}
            title="Main"
          />
        </View>

        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
							this.props.onPageChange("activity");
            }}
            icon={<Feather name="activity" size={20} />}
            title="Activity"
          />
        </View>

        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
							this.props.onPageChange("map");
            }}
            icon={<FontAwesome name="map-o" size={20} />}
            title="Map"
          />
        </View>

        <View style={styles.footer_Button}>
          <MainButton
            onPress={() => {
							this.props.onPageChange("account");
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
