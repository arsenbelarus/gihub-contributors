import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RepositoriesList } from '../components/RepositoriesList';
import { SearchContainer } from '../components/SearchContainer';
import { withRepositoriesList } from '../containers/withRepositoriesList';
import { withSearchContainer } from '../containers/withSearchContainer';

const SearchContainerEnhanced = withSearchContainer(SearchContainer);
const RepositoriesListEnhanced = withRepositoriesList(RepositoriesList);

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		minHeight: '100vh',
		width: '100%',
		padding: '1vw',
	},
}));

export const SearchRepositories = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<SearchContainerEnhanced />
			<RepositoriesListEnhanced />
		</Box>
	);
};
