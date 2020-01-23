import React from "react";
import { registerRootComponent } from 'expo';
import FoodLogisticsApp from "./src/FoodLogisticsRoot";
import {createTables} from './storage/SQLLite/localDB'

class AppRoot extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return <FoodLogisticsApp />;
  }

  _initDatabase()
  {
    createTables();
  }
}

registerRootComponent(AppRoot);