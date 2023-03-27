import React, { Component } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';

const chichen = require('./images/chichen.png');
const colosseum = require('./images/colosseum.png');
const machu = require('./images/machu.png');
const petra = require('./images/petra.png');
const redeemer = require('./images/redeemer.png'); 
const taj = require('./images/taj.png'); 
const wall = require('./images/wall.png'); 

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const SevenWonders = [
  { title: 'Great Wall of China', image: wall },
  { title: 'Petra', image: petra },
  { title: 'The Redeemer', image:  redeemer },
  { title: 'Machu Picchu', image: machu },
  { title: 'Chichen Itza', image: chichen },
  { title: 'Colosseum', image: colosseum },
  { title: 'Taj Mahal', image: taj },
];

export default class App extends Component {
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
        {
          SevenWonders.map((post, index) =>
            <PostContainer key={index} post={post}
            onPress={this.showImage} />
          )
        }
        </ScrollView>
        {this.renderViewer()}
      <StatusBar/>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    color: '#000000'
  },
});