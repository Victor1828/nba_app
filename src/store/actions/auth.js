import { SIGN_IN, SIGN_UP, HAS_TOKEN } from '../types'
import axios from 'axios'
import {
  FIREBASE_SIGNUP_URL,
  FIREBASE_SIGNIN_URL,
  FIREBASE_REFRESH_TOKEN_URL,
} from '../../constants/endpoints'

export const signIn = payload => {
  const response = axios
    .post(FIREBASE_SIGNIN_URL, {
      ...payload,
      returnSecureToken: true,
    })
    .then(({ data }) => data)
    .catch(error => console.error(error))

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
    .catch(error => console.error(error))

  return {
    type: SIGN_UP,
    payload: response,
  }
}

export const hasToken = payload => {
  const response = axios
    .post(FIREBASE_REFRESH_TOKEN_URL, {
      ...payload,
      grant_type: 'refresh_token',
    })
    .then(({ data }) => data)
    .catch(error => console.error(error))

  return {
    type: HAS_TOKEN,
    payload: response,
  }
}
