import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import AppBody from '../body/FoodLogisticsBody';


type Props = {
    isLoggedIn: true | false;
    page: number;
}

type State = {
    isLoggedIn: true | false;
    page: number;
}

export default class FoodLogisticsFrame extends React.Component<Props, State> {

    state: State = {
        isLoggedIn: false,
        page: 0
    };
    
    componentDidMount() {
        this.setState({isLoggedIn: this.props.isLoggedIn})
    }
    
    render() {
    
        return (

            <View style = {styles.container}>
                <View style = {styles.header}>

                    <View style = {styles.header_Menu}>
                        <Button
                           icon = {<Ionicons name='ios-menu' size = {50}/>}
                           type = "clear"
                        />
                    </View>

                    <View style = {styles.header_Title}>
                        <Text style = {{alignSelf: 'center'}}>Food Logistics!</Text>
                    </View>

                    <View style = {styles.header_Settings}>
                        <Button
                            icon = {<Ionicons name='ios-settings' size = {50}/>}
                            type = "clear"
                        />
                    </View>

                </View>

                <View style = {styles.body}>
                    <AppBody page={this.state.page}/>
                </View>

                <View style = {styles.footer}>

                    <View style = {styles.footer_Button}>
                        <Button onPress = {() => {this.setState({page: 0})}} title = 'B1'/>
                    </View>

                    <View style = {styles.footer_Button}>
                        <Button onPress = {() => {this.setState({page: 1})}} title = 'B2'/>
                    </View>

                    <View style = {styles.footer_Button}>
                        <Button onPress = {() => {this.setState({page: 2})}} title = 'B3'/>
                    </View>

                    <View style = {styles.footer_Button}>
                        <Button onPress = {() => {this.setState({page: 3})}} title = 'B4'/>
                    </View>

                </View>
            </View>
        );
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
        flexDirection: 'row'
    },

    header_Menu: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    header_Title: {
        flex: 3,
        alignContent: 'center',
        justifyContent: 'center'
    },

    header_Settings: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },

    body: {
        flex: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    footer: {
        flex: 1,
        flexDirection: 'row'
    },

    footer_Button: {
        flex: 1,
        borderColor: 'black',
        borderTopWidth: .5
    }
})