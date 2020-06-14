import { SIGN_IN, SIGN_UP } from '../types'
import axios from 'axios'
import {
  FIREBASE_SIGNUP_URL,
  FIREBASE_SIGNIN_URL,
} from '../../constants/endpoints'

export const signIn = payload => {
  const response = axios
    .post(FIREBASE_SIGNIN_URL, {
      ...payload,
      returnSecureToken: true,
    })
    .then(({ data }) => data)
    .catch(error => error)

  return {
    type: SIGN_IN,
    payload: response,
  }
}

export const signUp = payload => {
  const response = axios
    .post(FIREBASE_SIGNUP_URL, {
      ...payload,
      returnSecureToken: true,
    })
    .then(({ data }) => data)
    .catch(error => console.log(error))

  return {
    type: SIGN_UP,
    payload: response,
  }
}
