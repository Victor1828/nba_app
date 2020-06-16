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
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Home = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        if (route.name === 'News') {
          iconName = 'ios-paper'
        } else if (route.name === 'Games') {
          iconName = 'ios-basketball'
        }
        return <Icon name={iconName} size={size} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor: '#fff',
      inactiveTintColor: '#757575',
      style: {
        backgroundColor: '#17408B',
      },
    }}>
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
