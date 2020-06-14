import React from 'react'
import Logo from '../utils/logo'
import Form from '../utils/form'
import { ScrollView, StyleSheet } from 'react-native'

const ForgotPassword = () => {
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Form />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17408B',
    padding: 50,
  },
})

export default ForgotPassword
