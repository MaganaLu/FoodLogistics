import React, {Component} from 'react';
//import { View, ActivityIndicator, Text } from 'react-native';
import Config from '../../config.json';
import { ScrollView,TouchableOpacity,Dimensions,View,Text,StyleSheet,Image} from 'react-native';
//import { createRequire } from 'module';
//Button, Block, Text from components
// theme from constants
import MenuItem from '../../components/MenuItems';
import Container from '../../components/Container';


var data;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var {Windowheight, width} = Dimensions.get('window');

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
      return(
        /*
        <ScrollView style={styles.scrollViewStyle}>
      <Text style={{fontWeight: "bold", alignSelf: 'flex-start', fontSize: 60}}>Browse</Text>
    <View style={styles.menuContainer}>
      
              <MenuItem itemImage = {require('../../assets/watermelon.jpg')}/>
              <MenuItem itemImage = {require('../../assets/avocado.jpg')}/>
              <MenuItem itemImage = {require('../../assets/carrots.jpg')}/>
              <MenuItem itemImage = {require('../../assets/coconut.jpg')}/>
        
    </View>
</ScrollView>
*/

        <View style={styles.container}>
       
          
          <Text style={{fontWeight: "bold", alignSelf: 'flex-start', fontSize: 60}}>Browse</Text>
        
          
            <View style = {styles.menuContainer}>
              <MenuItem itemImage = {require('../../assets/redTomato.jpg')}/>
              <MenuItem itemImage = {require('../../assets/avocado.jpg')}/>
              <MenuItem itemImage = {require('../../assets/carrots.jpg')}/>
              <MenuItem itemImage = {require('../../assets/coconut.jpg')}/>
              <MenuItem itemImage = {require('../../assets/redTomato.jpg')}/>
              <MenuItem itemImage = {require('../../assets/avocado.jpg')}/>
              <MenuItem itemImage = {require('../../assets/carrots.jpg')}/>
              <MenuItem itemImage = {require('../../assets/coconut.jpg')}/>
              <MenuItem itemImage = {require('../../assets/redTomato.jpg')}/>
              <MenuItem itemImage = {require('../../assets/avocado.jpg')}/>
              <MenuItem itemImage = {require('../../assets/carrots.jpg')}/>
              <MenuItem itemImage = {require('../../assets/coconut.jpg')}/>
              
              
              </View>
            
          </View>
          /*
          <TouchableOpacity onPress={()=> alert('image clicked)}>
 
          <Image source={require('./sampleimage.png')} style = {styles.ImageClass} />
          
        </TouchableOpacity>
          */
      )
    }
    myfunction() {
        
  }
}
 

const styles = StyleSheet.create({
   
    container: {
      flex:1,
      backgroundColor: "white",
      width: width,
      height: height
    },
    overlayContainer:{
      flex:1,
      backgroundColor: 'rgba(47,163,218, .4)'
    },
    top:{
      height: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: { 
      fontSize: 20,
      
    },
    menuContainer:{
      height: '40%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    scrollViewStyle: {
      position: 'absolute',
      paddingTop: 60,
      marginTop: 0 ,
      height: 30 //    <----
  },
  });

  var styles2 = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingLeft:20,
        paddingRight:20
    },
    viewContainer:{
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1
    },
    iconText:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15
    },
    goalName:{
        textAlign:'center',
        marginTop:40,
        marginBottom:10,
        fontSize:20
    }
});