import {SET_PHOTOS} from '../actions/photos'

export default function (state = [], action = {}) {
  switch(action.type) {
  case SET_PHOTOS:
    return action.payload
  default:
    return state
  }
}