import { SIGN_IN, SIGN_UP, HAS_TOKEN } from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN: {
      const { expiresIn, registered, email, ...auth } = action.payload
      return {
        ...state,
        auth,
      }
    }
    case SIGN_UP: {
      const { expiresIn, email, ...auth } = action.payload
      return {
        ...state,
        auth,
      }
    }
    case HAS_TOKEN:
      const { refresh_token, id_token, user_id } = action.payload
      const { auth } = state
      return {
        ...state,
        auth: {
          ...auth,
          refreshToken: refresh_token,
          idToken: id_token,
          localId: user_id,
        },
      }
    default:
      return state
  }
}
