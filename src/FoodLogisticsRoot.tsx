import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FoodLogisticsBumper from './default/FoodLogisticsBumper';


// * tsx types
type Props = {};
type State = {
    isLoading: true | false;
};

export default class FoodLogisticsApp extends React.Component {

	state: State = {
		isLoading: true
	}

	// Check local storage to see if they are logged into an acct
	componentDidMount() {
		setTimeout(() => (this.setState({isLoading: false})), 3000);
		this._initFromLocalStorage();
	}

	render () {

		if (this.state.isLoading){
			return (
				<FoodLogisticsBumper/>
			)
		}

		else {
			return (
				<View style = {styles.container}>
					<Text>Hello World!</Text>
				</View>
				
			)
		}
	}

	// TODO: Implement local storage
	_initFromLocalStorage = async () => {
		
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});