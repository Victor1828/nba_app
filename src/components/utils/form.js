import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signIn, signUp, hasToken } from '../../store/actions/auth'

const { height } = Dimensions.get('screen')
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const passwordRegex = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/

class Form extends Component {
  state = {
    inputs: { email: '', password: '' },
    errors: {},
  }

  componentDidMount() {
    const { navigation, hasToken } = this.props
    this.getUserFromAsyncStorage(value => {
      if (value === null) return
      const user = JSON.parse(value)
      hasToken({ refresh_token: user.refresh_token })
        .then(({ payload }) => {
          this.setUserToAsyncStorage(payload, () => {
            navigation.replace('Home')
          })
        })
        .catch(error => console.error(error))
    })
  }

  validateForm = form => {
    let errors = {}
    const inputs = Object.keys(form)
    inputs.forEach(input => {
      if (!form[input]) {
        errors[input] = 'Required field'
      }
    })
    return errors
  }

  validateEmail = value => {
    const { inputs, errors } = this.state
    inputs.email = value
    errors.email = 'Required field'
    if (emailRegex.test(value)) return this.setState({ ...this.state, inputs, errors: {} })
    this.setState({ ...this.state, errors })
  }

  validatePassword = value => {
    const { inputs, errors } = this.state
    inputs.password = value
    errors.password = 'Required field'
    if (passwordRegex.test(value)) return this.setState({ ...this.state, inputs, errors: {} })
    this.setState({ ...this.state, errors })
  }

  handleInputChange = (inputName, value) => {
    const inputs = { ...this.state.inputs }
    inputs[inputName] = value

    this.setState({ ...this.state, inputs })
  }

  setUserToAsyncStorage = (payload, callback) => {
    const dateNow = new Date()
    const tokenExpirationDate =
      (dateNow.getTime() +
      Number(payload.expiresIn) * 1000
    ).toString()
    const userData = { ...payload, tokenExpirationDate }
    AsyncStorage.setItem('@nba_app@user', JSON.stringify(userData))
      .then(() => {
        callback()
      })
      .catch(error => console.error(error))
  }

  getUserFromAsyncStorage = callback => {
    AsyncStorage.getItem('@nba_app@user')
      .then(value => {
        callback(value)
      })
      .catch(error => console.error(error))
  }

  handleSubmit = () => {
    const { showPasswordConfirm, signIn, signUp, navigation } = this.props
    const errors = this.validateForm({ ...this.state.inputs })
    if (Object.keys(errors).length) return this.setState({ ...this.state, errors })
    if (showPasswordConfirm) return signUp(this.state.inputs)
    signIn(this.state.inputs)
      .then(({ payload }) => {
        this.setUserToAsyncStorage(payload, () => {
          navigation.replace('Home')
        })
      })
      .catch(error => console.error(error))
  }

  render() {
    const { navigation, showPasswordConfirm } = this.props
    return (
      <View style={styles.container}>
        <View
          style={
            this.state.errors.email
              ? styles.inputContainerError
              : styles.inputContainer
          }>
          <Icon name="ios-mail" size={28} color="#fff" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            style={styles.input}
            onChangeText={this.validateEmail}
            selectionColor="#fff"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {this.state.errors.email && (
          <Text style={styles.errorMessage}>{this.state.errors.email}</Text>
        )}
        <View
          style={
            this.state.errors.password
              ? styles.inputContainerError
              : styles.inputContainer
          }>
          <Icon name="ios-lock" size={28} color="#fff" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255, 255, 255, 0.6)"
            secureTextEntry
            style={styles.input}
            onChangeText={this.validatePassword}
            selectionColor="#fff"
          />
        </View>
        {this.state.errors.password && (
          <Text style={styles.errorMessage}>{this.state.errors.password}</Text>
        )}
        {!showPasswordConfirm && (
          <Text
            style={styles.forgotPasswordLabel}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot password?
          </Text>
        )}
        {showPasswordConfirm && (
          <View
            style={
              this.state.errors.password
                ? styles.inputContainerError
                : styles.inputContainer
            }>
            <Icon name="ios-lock" size={28} color="#fff" />
            <TextInput
              placeholder="Confirm password"
              placeholderTextColor="rgba(255, 255, 255, 0.6)"
              secureTextEntry
              style={styles.input}
              onChangeText={this.validatePassword}
              selectionColor="#fff"
            />
          </View>
        )}
        {this.state.errors.password && (
          <Text style={styles.errorMessage}>{this.state.errors.password}</Text>
        )}
        <TouchableOpacity onPress={this.handleSubmit}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>
              {showPasswordConfirm ? 'Signup' : 'Login'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: height / 1.75,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputContainerError: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
    padding: 12,
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#C9082A',
  },
  input: {
    color: '#fff',
    marginLeft: 15,
    flex: 1,
  },
  errorMessage: {
    color: '#C9082A',
    marginBottom: 15,
    fontWeight: '600',
  },
  forgotPasswordLabel: {
    color: '#fff',
    marginBottom: 20,
    textAlign: 'right',
  },
  loginButton: {
    backgroundColor: '#C9082A',
    alignItems: 'center',
    padding: 12,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

const mapStateToProps = state => {
  console.log(state)
  return state
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signIn, signUp, hasToken }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form)
