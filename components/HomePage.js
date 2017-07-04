/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import Store from './store';
import Row from './row';

var data = Store.getJsonData()
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
    console.disableYellowBox = true
  }
  
  static navigationOptions = {
    title: 'Home',
    headerTitleStyle: {color:'#ffffff'},
    headerStyle:{backgroundColor:'#000000'}
  }

   infiniteScroll(){
    // this will currentlya add  dummy data object, but to api call should be made
     data.push({
        title: 'our 500+ engineers all use this frontend development guide',
        previewBody:'An inside look at the front end tech of one of the southeast asias fastest',
        timStamp: new Date(),
        lastViewed:'yesterday',
        time: '5 minutes',
        body:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,',
        comments:[{
          by:'Dhoni',

          comment:"this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb",
          likes: 5
        },
        {
          by:'Prashanth',

          comment:"this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb",
          
          likes:3
        },
        {
          by:'Dhoni',

          comment:"this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb",
          
          likes: 45
        }]

  },
  {
        title: 'our 500+ engineers all use this frontend development guide',
        previewBody:'An inside look at the front end tech of one of the southeast asias fastest',
        timStamp: new Date(),
        lastViewed:'yesterday',
        time: '5 minutes',
        body:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,',
        comments:[{
          by:'Dhoni',

          comment:"this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb",
          likes: 5
        },
        {
          by:'Prashanth',

          comment:"this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb",
          
          likes:3
        },
        {
          by:'Dhoni',

          comment:"this is a testing comment cieubcwiu uhfrf fhrfuhref hrughferh rehgreghe hgheurhgegh iheugheiugh bcidsb",
          
          likes: 45
        }]

    })
      this.state.dataSource = ds.cloneWithRows(data)
      this.setState({}); // keeps firing
   }

  blogPage(data){
    const { navigate } = this.props.navigation;
    navigate('Blog', {data: data })
  }
  render() {
    var that = this
    return (
      <View style={styles.container}>
      
      <ListView
      onEndReachedThreshold={7}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row data={data} blog={(item)=>this.blogPage(item)}/>}
        pageSize={10}
        initialListSize={20}
        onEndReached={() => this.infiniteScroll()}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    flexDirection:'column', 
    backgroundColor:'#b6b8ba'
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


