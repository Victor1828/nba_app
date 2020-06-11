import React from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'
import Logo from './logo'

const Login = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <View>
          <Logo />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17408B',
    padding: 50,
  },
})

export default Login
