import { FETCH_PRODUCT_DETAIL } from '../../actions/products'

export const initialState = {
  isFetching: false,
  error: null,
  data: {}
}

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_PRODUCT_DETAIL.PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PRODUCT_DETAIL.SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload
      }
    case FETCH_PRODUCT_DETAIL.FAILED:
      return {
        ...state,
        isFetching: false,
        error,
        data: []
      }
    default:
      return state
  }
}
