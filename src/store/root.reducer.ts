import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as notifications } from 'react-redux-toastr';
import contributorsReducer from './contributors/contributors.reducer';
import repositoriesReducer from './repositories/repositories.reducer';

export const RootReducer = (history: History) =>
	combineReducers({
		router: connectRouter(history),
		contributors: contributorsReducer,
		repositories: repositoriesReducer,
		toastr: notifications,
	});

export default RootReducer;
