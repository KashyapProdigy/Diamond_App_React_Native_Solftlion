import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/FontAwesome5';

import HomeSeeker from './homeseeker';
import AppliedJobSeeker from './appliedjobseeker';
import SavedJobSeeker from './savedjobseeker';
import ProfileSeeker from './profileseeker';

const Tab = createMaterialBottomTabNavigator();

const MainTabSeeker = () => (
    <Tab.Navigator
    initialRouteName="HomeSeeker"
    activeColor="#4F45F0"
    barStyle={{ backgroundColor: 'white' }}
  >
    <Tab.Screen
      name="HomeSeeker"
      component={HomeSeeker}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon1 name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="AppliedJobSeeker"
      component={AppliedJobSeeker}
      options={{
        tabBarLabel: 'Applied Jobs',
        tabBarIcon: ({ color }) => (
          <Icon2 name="script-text-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="SavedJobSeeker"
      component={SavedJobSeeker}
      options={{
        tabBarLabel: 'Saved Jobs',
        tabBarIcon: ({ color }) => (
          <Icon3 name="bookmark" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileSeeker"
      component={ProfileSeeker}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon4 name="user" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabSeeker;