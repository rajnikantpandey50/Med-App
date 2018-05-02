import React from 'react';
import {Text, View, StyleSheet,Image,Button,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <View style = {styles.container}>
                <View style = {{flex:1,flexDirection:'row'}}>
                <TouchableOpacity
                style = {styles.icon}>
                <Icon name = 'menu' size={30} color = '#fff'
                    
                />
                </TouchableOpacity>
                <Text style = {styles.text}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'steelblue',
        height:80,
        alignItems:'center',
    },
    text : {
        padding:30,
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        height:90,
        flex:1
    },
    button:{
        flex:1
    },
    icon : {
        
        flex : 1,
        height:24,
        width:24
    }
})