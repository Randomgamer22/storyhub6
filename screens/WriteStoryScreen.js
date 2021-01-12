import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      content: '',
      storyNumber: 0,
    }
  }

  submitStory() {
    this.setState({
      storyNumber: this.state.storyNumber+1
    })
    db.collection('stories').add('ST' + this.state.storyNumber);
    db.collection('stories').doc('ST' + this.state.storyNumber).add({
      title: this.state.title,
      author: this.state.author,
      content: this.state.content,
    })
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.headerText}>Story Hub</Text>
        </View>
        <TextInput style = {styles.inputBox} placeholder = "Title of Story" 
        onChangeText = {text => this.setState({title: text})}/>
        <TextInput style = {[styles.inputBox, {height: 35}]} placeholder = "Author of Story" 
        onChangeText = {text => this.setState({author: text})}/>
        <TextInput style = {[styles.inputBox, {height: 250}]} placeholder = "Write Story"
        onChangeText = {text => this.setState({content: text})}/>
        <TouchableOpacity style = {styles.submitButton} onPress={this.submitStory}>
          <Text style = {styles.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>


    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },

    header: {
      alignItems: 'center',
      backgroundColor: '#9190f0',
      paddingTop: 20,
      paddingBottom: 20
    },

    headerText: {
      fontSize: 30,
      fontWeight: 700,
      color: 'white'
    },

    inputBox: {
      height: 35,
      marginTop: 20,
      width: '90%' ,
      alignSelf: "center",
      textAlign: "center",
      borderColor: 'black',
      borderWidth: 2,
  },

  submitButton: {
    marginTop: 40,
    padding: 10, 
    alignSelf: 'center',
    height: 55,
    width: '40%',
    backgroundColor: '#9190f0',
    textAlign: 'center',
    marginBottom: 20
  },

  buttonText: {
    marginTop: -3,
    fontSize: 30,
    fontWeight: 'bold',
    color: "#ffffff"
  },
  }
);
