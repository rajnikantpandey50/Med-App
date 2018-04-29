import React from 'react';
import { ActivityIndicator, ListView, Text, View, ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import {DrawerNavigator} from 'react-navigation';
export default class Medicine extends React.Component {
    static navigationOptions={
        drawerLable : 'Medicines',
        drawerIcon: ({tintColor})=>(
            <Image 
                source = {require('./Images/medicine.png')}
                style = {styles.icon}
                />
        ),
    }
  constructor(props) {
    super(props);
    
    this.state = {
      data:[],
      
      isLoading:true,
      visibleId:-1,
      isVisible:false
    }
  }

  componentDidMount() {
    var response = fetch('http://192.168.0.6:8080/medicines');
       response.then(response => response.json())
        .then((responsejson)=>{
          //  console.log(responsejson);
            this.setState({data:responsejson,isLoading:false})});
  }

  handleClick=(id)=>{
    if(this.state.visibleId == id)
    this.setState({visibleId:id,isVisible:!this.state.isVisible});
    else
    this.setState({visibleId:id,isVisible:true});
    
  }
  

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20,alignItems:'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }
    
      return (
        <View>
        <View style = {{backgroundColor:'steelblue',height:70,alignItems:'center'}}>
          <Text style = {{padding:30,color:'#fff',fontSize:20,fontWeight:'bold'}}>Medicine List</Text>
        </View>
        <ScrollView>
          
          {
            this.state.data.map((value,index)=>(
              <View key = {value.id}>
              <TouchableOpacity
                key = {value.id}
                style = {styles.container}
                onPress = {()=>{this.handleClick(value.id)}}
                >
                <Text style={styles.text}>{value.medicineName}</Text>
                
              </TouchableOpacity>
              <MyView  value = {value} visibleId = {this.state.visibleId} isVisible = {this.state.isVisible}/>
            </View>
            ))
          }
        </ScrollView>
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


class MyView extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.value.id == this.props.visibleId && this.props.isVisible){
    return(
      <View>
              <Text>Medicine Name: {this.props.value.medicineName}</Text>
              <Text>Manufactuer: {this.props.value.manufacturerName}</Text>
              <Text>Price: {this.props.value.price}</Text>
              <Text>Quantity: {this.props.value.quantity}</Text>
              <Text>Expiry Date: {this.props.value.expiryDate}</Text>
              <Text>Purchase Date: {this.props.value.purchaseDate}</Text>
            </View>
    );
  }
  else{
    return(
      <View></View>
    );
  }
  }
}