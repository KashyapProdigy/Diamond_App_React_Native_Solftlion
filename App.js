/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Common Screen Imports For Root Stack
 */
import SplashScreen from './src/screens/common/splash';
import LandingPage from './src/screens/common/landingPage';
import ForgotPassword from './src/screens/common/forgotpassword';
import AboutUs from './src/screens/common/aboutus';
import ContactUs from './src/screens/common/contactus';
import TermsAndCondition from './src/screens/common/termsandcondition';
import PrivacyPolicy from './src/screens/common/privacypolicy';
import RateApp from './src/screens/common/rateapp';

/**
 * Seeker Imports For Root Stack
 */
 import LoginSeeker from './src/screens/seeker/loginseeker';
 import RegisterSeeker from './src/screens/seeker/registerseeker';
 import MainTabSeeker from './src/screens/seeker/maintabseeker';
 import ApplyForJobSeeker from './src/screens/seeker/applyforjobseeker';
 import SettingSeeker from './src/screens/seeker/settingseeker';

 /**
 * Provider Imports For Root Stack
 */
  import LoginProvider from './src/screens/provider/loginprovider';
  import RegisterProvider from './src/screens/provider/registerprovider';
  import MainTabProvider from './src/screens/provider/maintabprovider';
  import SettingProvider from './src/screens/provider/settingprovider';
  import CreateJobProvider from './src/screens/provider/createjobprovider';
  import EmployeeApplied from './src/screens/provider/employeeapllied';

/**
 * Seller Imports For Root Stack
*/



const RootStack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <RootStack.Navigator
      screenOptions={{
        headerShown: false
      }}>

        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="LandingPage" component={LandingPage} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <RootStack.Screen name="AboutUs" component={AboutUs} />
        <RootStack.Screen name="ContactUs" component={ContactUs} />
        <RootStack.Screen name="TermsAndCondition" component={TermsAndCondition} />
        <RootStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <RootStack.Screen name="RateApp" component={RateApp} />


        <RootStack.Screen name="LoginSeeker" component={LoginSeeker} />
        <RootStack.Screen name="RegisterSeeker" component={RegisterSeeker} />
        <RootStack.Screen name="MainTabSeeker" component={MainTabSeeker} />
        <RootStack.Screen name="ApplyForJobSeeker" component={ApplyForJobSeeker} />
        <RootStack.Screen name="SettingSeeker" component={SettingSeeker} />


        <RootStack.Screen name="LoginProvider" component={LoginProvider} />
        <RootStack.Screen name="RegisterProvider" component={RegisterProvider} />
        <RootStack.Screen name="MainTabProvider" component={MainTabProvider} />
        <RootStack.Screen name="SettingProvider" component={SettingProvider} />
        <RootStack.Screen name="CreateJobProvider" component={CreateJobProvider} />
        <RootStack.Screen name="EmployeeApplied" component={EmployeeApplied} />


      </RootStack.Navigator>
    </NavigationContainer>
  )
}


export default App;
