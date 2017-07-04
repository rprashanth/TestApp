
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-fa-icons';

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
    color:'black',
    flexDirection:'row'
  },
  photo: {
    height: 80,
    width: 80,
    borderRadius: 20,
    marginTop:15
  },
});


const Row = (props) => (

  <View style={styles.container}>
    <View style={{flex:1, flexDirection:'row'}}>
      <View style={styles.textContainer}>
        <TouchableHighlight underlayColor="transparent" style={styles.titleContainer} onPress={()=> props.blog(props.data)}>
          <Text style={styles.text}>
            {props.data.title.length < 60 ? props.data.title : props.data.title.substr(0, 60) + '...'}
          </Text>
        </TouchableHighlight>
        <View style={styles.bodyPreview}>
          <Text style={styles.previewBody}>
            {props.data.previewBody.length < 60 ? props.data.previewBody : props.data.previewBody.substr(0, 60) + '...'}
          </Text>
        </View>
      </View>
      <View style={{padding:0, flex:0.3, }}>
        <View style={{ flex:1, alignItems:'center', justifyContents:'center'}}>
          <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={styles.photo} />
        </View>
      </View>
    </View>
    
    <View style={styles.timStamp}>
      <View style={{flex:0.5}}>
        <Text style={{fontSize:13}}>
        {props.data.lastViewed} . {props.data.time}
      </Text>
      </View>
      <View style={{flex:0.5, alignItems:'flex-end'}}>
        <Icon name='bookmark' style={{fontSize: 17, marginLeft:0}} />
      </View>
      </View>
   
  </View>
);

export default Row;