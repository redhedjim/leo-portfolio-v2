import { SET_ACTIVE_PROJECT, CLEAR_ACTIVE_PROJECT } from '../actions/actionTypes';

export function setActiveProject(state = {}, action) {
  switch (action.type) {
    case SET_ACTIVE_PROJECT:
      return action.project;
    case CLEAR_ACTIVE_PROJECT:
      return {};
    default:
      return state;
  }
}

