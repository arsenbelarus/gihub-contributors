import { createAction } from 'redux-actions';

export const searchRepositories = createAction(
	'repositories/SEARCH_REPOSITORIES'
);
export const goBack = createAction('repositories/GO_BACK');
