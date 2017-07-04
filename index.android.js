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
  View
} from 'react-native';

import HomePage from './components/HomePage';
import BlogPage from './components/blog';
import YouTube from 'react-native-youtube'
import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomePage },
  Blog: { screen: BlogPage },
});



export default class Test extends Component {
componentWillMount(){
	alert(800)
}
  render() {
    return (
      <View style={styles.container}>
      <YouTube
  ref={(component) => {
    this._youTubePlayer = component;
  }}
  videoId="2g811Eo7K8U"           // The YouTube video ID
  play={true}                     // control playback of video with true/false
  fullscreen={true}               // control whether the video should play in fullscreen or inline
  loop={true}                     // control whether the video should loop when ended

  onReady={e =>alert(90) }
  onChangeState={e => alert(900)}
  

  style={{ alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10 }}
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column'
    
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

AppRegistry.registerComponent('Test', () => Test);