import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      allStories: []
    }

    this.requestRef = null;
  }

  getStoriesList = () => {
    this.requestRef = db.collection("stories")
      .onSnapshot((snapshot) => {
        var allStories = snapshot.docs.map(document => document.data());
        this.setState({
          allStories: allStories
        });
        console.log(allStories);
      })
  }

  componentDidMount() {
    this.getStoriesList()
  }

  keyExtractor = (item, index) => {
    index.toString()
  }

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={"Story Name: " + item.title}
        subtitle={"Author: " + item.author}
      />
    )
  }

  searchFilter = (search) => {
    this.setState({ search: search });

    db.collection('stories')
      .where('title', '==', this.state.search)
      .onSnapshot((snapshot) => {
        var allStories = snapshot.docs.map(document => document.data());
        this.setState({
          allStories: allStories
        });
        console.log(allStories);
      })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Story Hub</Text>
        </View>
        <SearchBar
          placeholder="Search Story"
          onChangeText={(search) => this.searchFilter(search)}
          onclear={this.getStoriesList}
        />
        <ScrollView>
          <FlatList
            data={this.state.allStories}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})