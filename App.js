import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteStoryScreen },
    ReadStory: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'WriteStory') {
          return (
            <Image source={require('./assets/write.png')}
              style={{
                width: 40,
                height: 40
              }}></Image>
          );
        }
        else if (routeName === 'ReadStory') {
          return (
            <Image source={require('./assets/read.png')}
              style={{
                width: 40,
                height: 40
              }}></Image>
          );
        }
      },
    }),
  }
);

const StackNavigator = createStackNavigator(
{
  LoginScreen: {
    screen: LoginScreen,
  },
  BottomTab: {
    screen: TabNavigator,
  }
},
  {
    initialRouteName: 'LoginScreen'
  }
)

const AppContainer = createAppContainer(StackNavigator);
