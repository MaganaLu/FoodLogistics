import React from 'react';
import { Text, View, Button, StyleSheet } from "react-native";
import Modal from 'react-native-modal'

import { addName , selectNames, createNamesTable, dropNamesTable } from './localDB'

type Name = {
    name: string;
}

type State = {
    isModalVisible: boolean;
}

export default class DBButtons extends React.Component
{

    state: State = {
        isModalVisible: false
    }

    render(){
        return (
            <View style={styles.container}>
                <Button 
                    title = 'Press Me to create the names table!' 
                    onPress={() => this._handlePress(createNamesTable())}
                />
                <Button 
                    title = 'Press Me to delete the names table!' 
                    onPress={() => dropNamesTable()}
                />
                <Button 
                    title = 'Press Me to add!' 
                    onPress={() => addName({name: 'Michael'})}
                />
                <Button 
                    title = 'Press Me to select!' 
                    onPress={() => selectNames()}
                />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>
                            <Text>Hello!</Text>
                            <Button title="Hide modal" onPress={this._toggleModal} />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }

    _handlePress(res: boolean)
    {
        if (!res) this._toggleModal();
    }

    _toggleModal = () =>
    {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 200,
        width: 300
    },
  });


 