import { combineReducers } from 'redux';
import { HobbiesReducer } from './HobbiesReducer';
import { SkillsReducer } from './SkillsReducer';

const reducers = combineReducers({HobbiesReducer, SkillsReducer});

export default reducers;