
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5,
    // height:150,

    flexDirection: 'column',
    backgroundColor:'white'
  },
  titleContainer:{
    padding:12,
    flex:0.3,
    height:55,
    color:'black',
  },
  textContainer:{
    flex:0.7,
    // backgroundColor:'red'
  },
  text: {
    marginLeft: 2,
    fontSize: 16,
    color:'rgb(0, 2, 5)',
    marginBottom:10,
    fontFamily:'Comic Sans MS'

  },
  bodyPreview:{
    padding:12,
    flex:0.3,
    color:'black',
    height:50,
  },
  timStamp:{
    padding:12,
    flex:0.3,
    color:'black' 
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 20,
    marginTop:15
  },
});


const Comments = (props) => (

  <View style={styles.container}>
    <View style={{padding:5 , backgroundColor:'white'}}>
      <Text style={{lineHeight: 30}}>this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb</Text>   
    </View>
    <View style={{width:width, height:1, flex:0.5, backgroundColor:'green'}}></View>
    <View style={{height:50, width: width, flexDirection:'row', marginTop:5}}>
      
      <View style={{flex:0.1, marginLeft:5}}>
        <TouchableHighlight underlayColor="transparent" style={{flex:0.5}} onPress={()=>alert(90)}> 
          <Text>Like</Text>
        </TouchableHighlight>
      </View>
      <View style={{flex:0.9, alignItems:'flex-start'}}>
        <Text > 3</Text>
      </View>
    </View>
  </View>
);

export default Comments;