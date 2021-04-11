import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeSeller from './homeseller';
import ProfileSeller from './profileseller';
import CartSeller from './cartseller';
import FavouriteSeller from './favouriteseller';
import MyOrderSeller from './myorderseller';
import SettingSeller from './settingseller';




const Drawer = createDrawerNavigator();

const MainTabSeller = () => (
    <Drawer.Navigator initialRouteName="HomeSeller">
    <Drawer.Screen name="Home" component={HomeSeller} />
    <Drawer.Screen name="Profile" component={ProfileSeller} />
    <Drawer.Screen name="My Cart" component={CartSeller} />
    <Drawer.Screen name="Favourite" component={FavouriteSeller} />
    <Drawer.Screen name="My Orders" component={MyOrderSeller} />
    <Drawer.Screen name="Settings" component={SettingSeller} />
    </Drawer.Navigator>
);

export default MainTabSeller;