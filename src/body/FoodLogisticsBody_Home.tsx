import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

var data;

type State = {
    isLoading: true | false;
    err: true | false;
    errMessage: string;
    data: any;
}

export default class Home extends React.Component {

    state: State = {
        isLoading: true,
        err: false,
        errMessage: '',
        data: null
    }

    componentDidMount() {
        return fetch('http://localhost:3000', {
            method: 'GET',
            headers: {
              host: 'http://localhost:3000'
            },
          })
            .then(response => {
                console.log(response.json)
                this.setState({
                    isLoading: false,
                    data: response
                });
            })
            .catch (error => {
                this.setState({
                    err: true,
                    errMessage: error
                })
            })
    }

    render() {

        if (this.state.isLoading) {
            return (
                <ActivityIndicator/>
            )
        }

        else if (this.state.err){
            return (
                <Text>{this.state.errMessage}</Text>
            )
        }

        else {
            return (
                <Text>{this.state.data[0]}</Text>
            )
        }
    }
}