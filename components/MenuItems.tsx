import React from 'react';
import{
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';

export default class MenuItem extends React.Component{
    render(){
        return(
            <View style={styles.menuItem}>
                <TouchableOpacity onPress={()=> alert('image clicked- this is upposed to go somewhere')}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image} />
                    </TouchableOpacity>
                </View>
                
        );
    }
}

const styles = StyleSheet.create({
    menuItem:{
        width:'33.333333%',
        height: '50%',
        padding:2,
        backgroundColor: '#ccc',
        borderColor: '#000',
        borderWidth: 1,
    },
    image:{
        width:'100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
        borderWidth: 2
    }
})