import { SIGN_IN, SIGN_UP } from '../types'

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        auth: action.payload,
      }
    case SIGN_UP:
      return {
        ...state,
        auth: action.payload,
      }
    default:
      return state
  }
}
