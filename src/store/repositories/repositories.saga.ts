import { select, put, takeEvery } from 'redux-saga/effects';
import { push as pushLocation } from 'connected-react-router';
import { routes } from '../../consts';
import {
	goBack,
	searchRepositories,
} from '../repositories/repositories.actions';
import {
	changePageNumber,
	clearRepositoriesData,
} from './repositories.reducer';
import {
	pageNumberSelector,
	searchValueSelector,
} from './repositories.selector';
import { getRepositories } from './repositories.thunk';

export function* handleSearchRepositories() {
	const searchValue: string = yield select(searchValueSelector);
	const pageNumber: number = yield select(pageNumberSelector);
	yield put(getRepositories({ searchValue, pageNumber }) as any);
}

export function* handleGoBack() {
	yield put(pushLocation(routes.base!));
	yield put(clearRepositoriesData());
}

export function* repositoriesSaga() {
	yield takeEvery(
		[searchRepositories, changePageNumber],
		handleSearchRepositories
	);
	yield takeEvery(goBack, handleGoBack);
}
