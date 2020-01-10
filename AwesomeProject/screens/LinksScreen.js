import * as React from 'react';
import { StatusBar, View, TextInput, Text, FlatList, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo';

export default class LinksScreen extends React.Component {
  state = {
    inputValue: '',
    todos: []
  };

  changeText = value => {
    this.setState({
      inputValue: value
    });
  };

  addItem = () => {
    if (this.state.inputValue !== '') {
      this.setState(prevState => {
        const newToDo = {
          title: this.state.inputValue,
          createdAt: Date.now(),
        };

        var todos = this.state.todos.concat(newToDo);

        this.setState({
          inputValue: '',
          todos: todos
        });
      });
    }
  };

  render() {
    const todos = this.state.todos.reverse().map((todo, key) =>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{
            width: 20,
            height: 20,
            borderRadius: 15,
            borderWidth: 3,
            borderColor: 'white',
            margin: 15
          }}>
          </TouchableOpacity>
          <Text style={{ paddingLeft: 5, marginTop:10, fontSize: 28, color: 'white'}}>{todo.title}</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 28, marginRight: 15 }}>x</Text>
          </TouchableOpacity>
        </View>
    </View>
    );

    return (
      <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View>
          <TextInput
            style={styles.input}
            onSubmitEditing={this.addItem}
            onChangeText={this.changeText}
            placeholder="Type here to add a to do."
            value={this.state.inputValue}
            placeholderTextColor={'#fff'}
            multiline={true}
            autoCapitalize="sentences"
            underlineColorAndroid="transparent"
            selectionColor={'white'}
            maxLength={30}
            returnKeyType="done"
            autoCorrect={false}
            blurOnSubmit={true}
          />
        </View>
        <View>
        {todos}
        </View>
      </LinearGradient>
    );
  }
}

const styles = {
  input: {
    marginTop: 30,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500',
  },
};
