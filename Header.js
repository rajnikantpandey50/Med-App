import React from 'react';
import {Text, View, StyleSheet,Image,Button,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    drawerOpen = ()=>{
        
    }
    
    render(){
        
        return(
            <View style = {styles.container}>
                <View style = {styles.outerView}>
                <Icon name = 'menu' size={30} color = '#fff'
                style = {styles.icon}  
                onPress = {this.drawerOpen}
                />
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
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        height:90,
        flex:2
    },
    button:{
        flex:1
    },
    icon : {
        
        flex : 1,
        
    },
    outerView:{
        flex:1,
        flexDirection:'row',
        paddingTop:37,
        paddingLeft:10
    }
})