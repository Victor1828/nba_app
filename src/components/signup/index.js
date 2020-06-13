import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Form from './form'
import Logo from '../utils/logo'

const Signup = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Form navigation={navigation} showPasswordConfirm />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17408B',
    padding: 50,
  },
})

export default Signup
