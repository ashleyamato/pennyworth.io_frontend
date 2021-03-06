import {
  UPDATE_DATE_TIME,
  UPDATE_SERVICE_ID,
  UPDATE_NOTES,
  GET_USER_ID,
  POST_SERVICE,
} from '../actions/dateTime'

let initialState = {
    date: '',
    notes: '',
    user_id: 0,
    service_id: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATE_TIME:
      return {
        ...state,
        date: action.date,
      }
    case UPDATE_SERVICE_ID:
      return {
        ...state,
        service_id: action.service_id
      }
    case UPDATE_NOTES:
      return {
        ...state,
        notes: action.notes
      }
    case GET_USER_ID:
      return {
        ...state,
        user_id: action.user_id
      }
      case POST_SERVICE:
        return {
          ...state,
          loading: true,
          error: ''
        }
    default: return state
  }
}
