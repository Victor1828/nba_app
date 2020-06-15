import { FIREBASE_API_KEY } from 'react-native-dotenv'

export const FIREBASE_URL = 'https://rn-nba-app-fe316.firebaseio.com'
export const NBA_NEWS_URL = 'https://newsapi.org/v2/everything?q=nba'
export const FIREBASE_SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`
export const FIREBASE_SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`
export const FIREBASE_REFRESH_TOKEN_URL = `https://securetoken.googleapis.com/v1/token?key=${FIREBASE_API_KEY}`
