import { combineReducers } from 'redux'
import {
  SELECT_TAG, INVALIDATE_TAG,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const selectedTag = (state = 'react', action) => {
  switch (action.type) {
    case SELECT_TAG:
      return action.tag
    default:
      return state
  }
}

const initState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const posts = (state = initState, action) => {
  switch (action.type) {
    case INVALIDATE_TAG:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsByTag = (state = { }, action) => {
  switch (action.type) {
    case INVALIDATE_TAG:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.tag]: posts(state[action.tag], action)
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsByTag,
  selectedTag
})

export default rootReducer
