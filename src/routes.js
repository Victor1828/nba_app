import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

// SCREENS

import Login from './components/login'
import News from './components/news'
import Games from './components/games'
import Signup from './components/signup'
import ForgotPassword from './components/forgot_password'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="News" component={News} />
    <Tab.Screen name="Games" component={Games} />
  </Tab.Navigator>
)

const LoginStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)

export const Navigator = () => {
  return (
    <NavigationContainer>
      {false && <TabNavigator />}
      {true && <LoginStack />}
    </NavigationContainer>
  )
}
