import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Form extends Component {
  state = {
    inputs: { email: '', password: '' },
    errors: {},
  }

  validateForm = form => {
    let errors = {}
    const inputs = Object.keys(form)
    inputs.forEach(input => {
      if (!form[input].value) {
        errors[input] = 'Required field'
      }
    })
    return errors
  }

  handleInputChange = (inputName, value) => {
    const inputs = { ...this.state.inputs }
    inputs[inputName] = value

    this.setState({ ...this.state, inputs })
  }

  handleSubmit = () => {
    const errors = this.validateForm({ ...this.state.inputs })
    if (errors) return this.setState({ ...this.state, errors })
    console.log('Valid Form')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name="ios-mail" size={28} color="#fff" />
          <TextInput
            placeholder="Email"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            style={styles.input}
            onChangeText={value => this.handleInputChange('email', value)}
            selectionColor="#fff"
          />
          {this.state.errors.email && <Text>{this.state.errors.email}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Icon name="ios-lock" size={28} color="#fff" />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
            secureTextEntry
            style={styles.input}
            onChangeText={value => this.handleInputChange('password', value)}
            selectionColor="#fff"
          />
          {this.state.errors.password && (
            <Text>{this.state.errors.password}</Text>
          )}
        </View>
        <Text style={styles.forgotPasswordLabel}>Forgot password?</Text>
        <TouchableOpacity onPress={this.handleSubmit}>
          <View style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: 'row',
    padding: 12,
    marginBottom: 20,
    borderRadius: 5,
  },
  input: {
    color: '#fff',
    marginLeft: 15,
    flex: 1,
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

export default Form
