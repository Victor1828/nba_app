import React from 'react'
import { StyleSheet, StatusBar, ScrollView, Text } from 'react-native'
import Logo from './logo'
import Form from './form'

const Login = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <Logo />
        <Form />
        <Text style={styles.createAccountLabel}>
          Don't have an account? create a new account
        </Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17408B',
    padding: 50,
  },
  createAccountLabel: {
    color: '#fff',
    textAlign: 'center',
  },
})

export default Login
