import React from "react";
import { Text, View, StyleSheet } from "react-native";
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

export default class Frame_Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.header_Menu}>
          <MainButton icon={<Ionicons name="ios-menu" size={50} />} />
        </View>

        <View style={styles.header_Title}>
          <Text style={{ alignSelf: "center" }}>Food Logistics!</Text>
        </View>

        <View style={styles.header_Settings}>
          <MainButton icon={<Ionicons name="ios-settings" size={50} />} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

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
  }
});
