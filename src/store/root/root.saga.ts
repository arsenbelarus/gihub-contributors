import { all, spawn, put, call } from 'redux-saga/effects';
import { actions as notifications } from 'react-redux-toastr';
import { SagaIterator } from 'redux-saga';
import { contributorsSaga } from '../contributors/contributors.saga';
import { repositoriesSaga } from '../repositories/repositories.saga';
import { notificationsSaga } from './error.saga';

export default function* rootSaga() {
	const sagas: any[] = [contributorsSaga, repositoriesSaga, notificationsSaga];
	yield all(sagas.map((saga) => spawn(sagaLoop, saga)));
}

function* sagaLoop(saga: () => SagaIterator) {
	while (true) {
		try {
			yield call(saga);
			break;
		} catch (e: any) {
			yield put(
				notifications.add({
					type: 'error',
					title: e.message || 'Something went wrong, try again later',
				})
			);
		}
	}
}
