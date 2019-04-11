import {
  LOGIN_REQUEST,
  LOGIN_SECCESS,
  LOGIN_FAIL,
} from '../actions/UserActions'

const initialState = {
  name: '',
  error: '',
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' }
    case LOGIN_SECCESS:
      return { ...state, name: action.payload, isFetching: false }
    case LOGIN_FAIL:
      return { ...state, error: action.payload, isFetching: false }
    default:
      return state
  }
}
