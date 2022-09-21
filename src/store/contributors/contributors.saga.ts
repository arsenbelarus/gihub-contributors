import { LOCATION_CHANGE, push as pushLocation } from 'connected-react-router';
import { select, put, takeEvery } from 'redux-saga/effects';
import { routes } from '../../consts';
import { locationSelector } from '../router.selector';
import { goToMainPage } from './contributors.actions';
import {
	changePageNumber,
	clearContributorsData,
} from './contributors.reducer';
import { pageNumberSelector } from './contributors.selector';
import { getReactContributors } from './contributors.thunk';

export function* handleLocationChange() {
	const location: { pathname: string } = yield select(locationSelector);
	const currentPage: number = yield select(pageNumberSelector);
	if (location.pathname !== routes.contributors) return;
	yield put(getReactContributors(currentPage) as any);
}

export function* handleGoToMainPage() {
	yield put(clearContributorsData());
	yield put(pushLocation(routes.base));
}

export function* contributorsSaga() {
	yield takeEvery([LOCATION_CHANGE, changePageNumber], handleLocationChange);
	yield takeEvery(goToMainPage, handleGoToMainPage);
}
