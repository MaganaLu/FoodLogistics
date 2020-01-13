import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesome, Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import AppBody from '../body/FoodLogisticsBody';

const MainButton = props => 
    <Button  
        buttonStyle={{ flexDirection: 'column', justifyContent: 'space-between' }} 
        type= 'clear' {...props}
        titleStyle = {{color: 'black', fontSize: 15}}
    />


type Props = {
    isLoggedIn: true | false;
}

type State = {
    isLoggedIn: true | false;
    page: 1 | 2 | 3 | 4;
}

export default class FoodLogisticsFrame extends React.Component<Props, State> {

    state: State = {
        isLoggedIn: false,
        page: 1
    };

    componentDidMount() {
        this.setState({isLoggedIn: this.props.isLoggedIn})
    }
    
    render() {
    
        return (

            <View style = {styles.container}>
                <View style = {styles.header}>

                    <View style = {styles.header_Menu}>
                        <MainButton
                           icon = {<Ionicons name='ios-menu' size = {50}/>}
                        />
                    </View>

                    <View style = {styles.header_Title}>
                        <Text style = {{alignSelf: 'center'}}>Food Logistics!</Text>
                    </View>

                    <View style = {styles.header_Settings}>
                        <MainButton
                            icon = {<Ionicons name='ios-settings' size = {50}/>}
                        />
                    </View>

                </View>

                <View style = {styles.body}>
                    <AppBody page={this.state.page}/>
                </View>

                <View style = {styles.footer}>

                    <View style = {styles.footer_Button}>
                        <MainButton 
                            onPress = {() => {this.setState({page: 1})}} 
                            icon = {<AntDesign name='home' size = {20}/>}
                            title = 'Main'
                        />
                    </View>

                    <View style = {styles.footer_Button}>
                        <MainButton 
                            onPress = {() => {this.setState({page: 2})}} 
                            icon = {<Feather name='activity' size = {20}/>}
                            title = 'Activity'
                        />
                    </View>

                    <View style = {styles.footer_Button}>
                        <MainButton 
                            onPress = {() => {this.setState({page: 3})}} 
                            icon = {<FontAwesome name='map-o' size = {20}/>}
                            title = 'Map'
                        />
                    </View>

                    <View style = {styles.footer_Button}>
                        <MainButton 
                            onPress = {() => {this.setState({page: 4})}} 
                            icon = {<AntDesign name='user' size = {20}/>}
                            title = 'Account'
                        />
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