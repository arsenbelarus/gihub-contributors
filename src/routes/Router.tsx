import { Route, Switch } from 'react-router-dom';
import { routes } from '../consts';
import { LandingPage } from '../pages/LandingPage';
import { ReactContributors } from '../pages/ReactContributors';
import { SearchRepositories } from '../pages/SearchRepositories';

export const Router = () => {
	return (
		<Switch>
			<Route path={routes.contributors} exact component={ReactContributors} />
			<Route path={routes.search} exact component={SearchRepositories} />
			<Route path={'/'} exact component={LandingPage} />
		</Switch>
	);
};
