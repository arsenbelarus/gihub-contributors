import { createBrowserHistory } from 'history';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createStore } from './store/store';

const history = createBrowserHistory();
const store = createStore(history);

export const AppProviders = (props: PropsWithChildren<{}>) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>{props.children}</ConnectedRouter>
	</Provider>
);
