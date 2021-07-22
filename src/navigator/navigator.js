import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../screen/Splash/Splash'
import LoginScreen from '../screen/LoginScreen/LoginScreen';
import HomeScreen from '../screen/HomeScreen/HomeScreen' 
import CameraScreen from '../screen/CameraComponent/CameraNew'
// import DisplayScreen from '../../screens/DisplayScreen/DisplayScreen'
import { createStackNavigator } from '@react-navigation/stack';
import navigationServices from './navigationServices';
import DisplayTransaction from '../screen/DisplayTransaction/DisplayTransaction'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
    const Stack = createStackNavigator()
  
    return (
      <Stack.Navigator 
        initialRouteName={HomeScreen} 
        screenOptions={{
          headerShown: false,
      }}>
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Stack.Screen name={'CameraScreen'} component={CameraScreen} />
      </Stack.Navigator>
    );
  }

  const AppStack = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="DisplayTransaction" component={DisplayTransaction} />
        </Tab.Navigator>
    );
  }

const Navigator = () => {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer ref={navigatorRef => {
        navigationServices.setTopLevelNavigator(navigatorRef)
      }}
    >
      <RootStack.Navigator headerMode="none" initialRouteName={"Splash"} >
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="App" component={AppStack} />
        <RootStack.Screen name="Splash" component={Splash} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator