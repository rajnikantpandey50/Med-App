import React from 'react';
import { ActivityIndicator, ListView, Text, View, ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Medicine from './Medicines';
import Buy from './Buy';
import Add from './Add';
import Sell from './Sell';

export default DrawerNavigator ( {
    Medicine:{
      screen: Medicine,
    },
    Buy:{
      screen: Buy,
    },
    Add:{
      screen: Add,
    },
    Sell:{
      screen: Sell,
    },
})