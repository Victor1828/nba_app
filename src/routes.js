import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')

// SCREENS

import Login from './components/login'
import News from './components/news'
import Games from './components/games'
import Signup from './components/signup'
import ForgotPassword from './components/forgot_password'
import Logo from './components/utils/logo'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Home = () => (
  <Tab.Navigator>
    <Tab.Screen name="News" component={News} />
    <Tab.Screen name="Games" component={Games} />
  </Tab.Navigator>
)

const AppNavigator = () => (
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
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: <Logo height={height / 20} width={width / 3} />,
        headerStyle: {
          backgroundColor: '#17408B',
        },
      }}
    />
  </Stack.Navigator>
)

export const Navigator = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
