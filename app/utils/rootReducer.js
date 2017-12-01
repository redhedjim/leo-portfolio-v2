import { combineReducers } from 'redux';
import { addMessage } from '../flashMessages/reducers/flashMessagesReducer';
import { setActiveProject } from '../pages/landingPage/reducers/projectsReducer';

export default combineReducers({
  messages: addMessage,
  activeProject: setActiveProject,
});
