import { SET_ACTIVE_PROJECT, CLEAR_ACTIVE_PROJECT } from './actionTypes';
import projectList from '../projectDetails';

export function setActiveProject(id) {
  return function (dispatch) {
    const project = projectList.find(item => item.id === id);
    dispatch({ type: SET_ACTIVE_PROJECT, project });
  };
}

export function clearActiveProject() {
  return function (dispatch) {
    dispatch({ type: CLEAR_ACTIVE_PROJECT });
  };
}
