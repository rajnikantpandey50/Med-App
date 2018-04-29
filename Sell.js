import React from 'react';
import { ActivityIndicator, ListView, Text, View, ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import {DrawerNavigator} from 'react-navigation';
export default class Sell extends React.Component {
    static navigationOptions={
        drawerLable : 'Sell',
        
    }
  
  render() {
    
    
      return (
        <View>
        <Text>Buy Medicines</Text>
        </View>
      );
    

    
  }
}

const styles = StyleSheet.create ({
  container: {
     padding: 10,
     marginTop: 3,
     backgroundColor: '#815DC8',
     alignItems: 'center',
  },
  text: {
     color: '#85E1CC'
  },
  icon : {
      height:24,
      width:24
  }
})


