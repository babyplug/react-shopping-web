import {
  USER_SESSION,
  USER_REGISTER,
  USER_LOGOUT,
  FETCH_CURRENT_USER
} from '../../actions/auth'

export const initialState = {
  isFetching: false,
  error: null,
  currentUser: {},
  isAuthenticated: false
}

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case USER_SESSION.PENDING:
    case USER_REGISTER.PENDING:
    case USER_LOGOUT.PENDING:
    case FETCH_CURRENT_USER.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case USER_SESSION.SUCCESS:
    case USER_REGISTER.SUCCESS:
    case FETCH_CURRENT_USER.SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentUser: payload,
        isAuthenticated: true
      }
    case USER_SESSION.FAILED:
    case USER_REGISTER.FAILED:
    case USER_LOGOUT.SUCCESS:
    case FETCH_CURRENT_USER.FAILED:
      return {
        ...state,
        isFetching: false,
        error,
        currentUser: {},
        isAuthenticated: false
      }
    default:
      return state
  }
}
