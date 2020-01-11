import React, { Component } from 'react'
import {Text, View, TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios';


class App extends Component {
constructor(){
    super();
    this.state = {
    myData: [],
  };
  }


clickPost(){
    var url = 'http://192.168.50.187:3210/data';
    axios.post(url, {
      name: this.state.input1,
      age: this.state.input2
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.state.input1 = '';
    this.state.input2 = '';
  };
  
  clickGet(){
    var url = 'http://192.168.50.187:3210/data';
    axios.get(url)
    .then((takeData) => {
      console.log(takeData.data);
      this.setState({
        myData: takeData.data,
      }) 
    })
  };

render() {

    const dataPostgre = this.state.myData.map((item, index)=>{
        var array = ['Name: ',item.name,', Age: ', item.age, ' year(s) old.'].join(' ');
        return <Text style={{fontSize:20,fontWeight:'bold'}} key={index}>{array}</Text>;
      })

    return (
<View>
<View style={{flexDirection:'column', alignItems:'center'}}>

  

<Text style={{marginTop:60, fontSize:25, fontWeight:'bold' }}>
Testing App
</Text>

<TextInput
placeholder='Enter name'
style={{height: 60, width: 350, fontSize: 15}}
onChangeText={(input1) => this.setState({input1})}
value={this.state.input1}
/>

<TextInput
placeholder='Enter age'
style={{height: 60, width: 350, fontSize: 15}}
onChangeText={(input2) => this.setState({input2})}
value={this.state.input2}
/>
</View>

<View style={{flexDirection:'row', justifyContent:'center'}}>
<TouchableOpacity
style={{
    backgroundColor:'black', borderRadius:10,
    flex:1, width:100, height:50, margin:20,
    flexDirection:'row', justifyContent:'center',
    alignItems:'center'
    }}
onPress={this.clickPost.bind(this)}
>
<Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
POST
</Text>
</TouchableOpacity>

<TouchableOpacity
style={{
    backgroundColor:'black', borderRadius:10,
    flex:1, width:100, height:50, margin:20,
    flexDirection:'row', justifyContent:'center',
    alignItems:'center'
    }}
onPress={this.clickGet.bind(this)}
>
<Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>
GET
</Text>
</TouchableOpacity>
</View>

<View style={{flexDirection:'column',alignItems:'center'}}>
{dataPostgre}
</View>

</View>
);
}
}

export default App;