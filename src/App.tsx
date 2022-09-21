import { AppProviders } from './AppProviders';
import { Router } from './routes/Router';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
	mainContainer: {
		display: 'flex !important',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
	},
}));

export const App = () => {
	const classes = useStyles();
	return (
		<AppProviders>
			<Container className={classes.mainContainer}>
				<Router />
			</Container>
		</AppProviders>
	);
};
