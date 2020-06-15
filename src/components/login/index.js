import React from 'react'
import {
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native'
import Logo from '../utils/logo'
import Form from '../utils/form'

const { height, width } = Dimensions.get('screen')

const Login = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.container}>
        <Logo height={height / 4.5} width={width / 2.06} />
        <Form navigation={navigation} />
        <Text>
          <Text style={styles.accountLabel}>Don't have an account? </Text>
          <Text
            style={styles.createAccountLabel}
            onPress={() => navigation.navigate('Signup')}>
            create a new account
          </Text>
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
  accountLabel: {
    color: '#fff',
    textAlign: 'center',
  },
  createAccountLabel: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

export default Login
