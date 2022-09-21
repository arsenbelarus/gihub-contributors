import { Box, Card } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { routes } from '../consts';

const useStyles = makeStyles(() => ({
	mainContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '3vw',
	},
	card: {
		padding: '0 20px',
		minWidth: '40vw',
		minHeight: '40vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#424242 !important',
		color: '#fff !important',
		fontWeight: 'bold !important',
		fontSize: '1.1rem',
		letterSpacing: '.1rem',
	},
	link: {
		textDecoration: 'none',
	},
}));

export const LandingPage = () => {
	const classes = useStyles();

	return (
		<Box className={classes.mainContainer}>
			<Link to={routes.contributors} className={classes.link}>
				<Card className={classes.card}>GET REACT CONTRIBUTORS</Card>
			</Link>
			<Link to={routes.search} className={classes.link}>
				<Card className={classes.card}>SEARCH REPOSITORIES</Card>
			</Link>
		</Box>
	);
};
