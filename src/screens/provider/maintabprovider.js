import React from 'react';
import {BackHandler} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/FontAwesome5';

import HomeProvider from './homeprovider';
import ActiveJobProvider from './activejobprovider';
import AllJobProvider from './alljobprovider';
import ProfileProvider from './profileprovider';

const Tab = createMaterialBottomTabNavigator();

const MainTabProvider = () => (
    <Tab.Navigator
    initialRouteName="HomeProvider"
    activeColor="#4F45F0"
    barStyle={{ backgroundColor: 'white' }}
  >
    <Tab.Screen
      name="HomeProvider"
      component={HomeProvider}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon1 name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ActiveJobProvider"
      component={ActiveJobProvider}
      options={{
        tabBarLabel: 'Active Jobs',
        tabBarIcon: ({ color }) => (
          <Icon2 name="script-text-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="AllJobProvider"
      component={AllJobProvider}
      options={{
        tabBarLabel: 'All Jobs',
        tabBarIcon: ({ color }) => (
          <Icon3 name="bookmark" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileProvider"
      component={ProfileProvider}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon4 name="user" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabProvider;