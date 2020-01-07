import React from 'react';
import {
    View,
    Text,
    ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true};
    }

    buildURL(path) {
        const dbBaseURL = 'http://10.0.2.2:3000';
        if (path.length > 0 && path[0] !== '/')
            path = `/${path}`;
        return dbBaseURL + path;
    }

    componentDidMount() {
        fetch(this.buildURL('/dbSelect'))
            .then(response => response.json())
            .then(resJson => {
                console.log(resJson);
                this.setState({
                    isLoading: false,
                    dataSource: resJson
                })
            }).catch(error => {
            console.log(error)
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    data = {this.state.dataSource}
                    renderItem = {({item}) => <FormatOutput
                                                city = {item.city}
                                                tempHi = {item.temp_hi}
                                                tempLo = {item.temp_lo}
                                                date = {item.date}
                                               />}
                    keyExtractor = {item => (item.city + item.date)}
                />

            </View>
        )
    }
}

class FormatOutput extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    In {this.props.city} on {this.props.date},
                    the high temp. was {this.props.tempHi} and
                    the low temp. was {this.props.tempLo}.
                </Text>
            </View>
        )
    }
}