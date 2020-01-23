import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Config from '../../config.json';

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
        return fetch(Config.baseUrl, {
            method: 'GET',
            headers: {
              host: Config.baseUrl
            },
          })
            .then(res => res.json())
            .then(resJson => {
                this.setState({
                    isLoading: false,
                    data: resJson.message
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
                <Text>{this.state.data}</Text>
            )
        }
    }
}