import React from "react";
import { registerRootComponent } from 'expo';
import FoodLogisticsApp from "./src/FoodLogisticsRoot";

class AppRoot extends React.Component {
  render() {
    return <FoodLogisticsApp />;
  }
}

registerRootComponent(AppRoot);