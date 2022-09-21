import { createAction } from 'redux-actions';
import { routes } from '../../consts';

export const changeLocation = createAction<typeof routes[keyof typeof routes]>(
	'contributors/CHANGE_LOCATION'
);
export const goToMainPage = createAction('contributors/GO_TO_MAIN');
