import { Box, Button, Typography } from '@mui/material';
import { ContributorsList } from '../components/ContributorsList';
import { withContributorsList } from '../containers/withContributorsList';
import { goToMainPage } from '../store/contributors/contributors.actions';
import { useAppDispatch } from '../store/store';

const ContributorsListEnhanced = withContributorsList(ContributorsList);

export const ReactContributors = () => {
	const dispatch = useAppDispatch();

	return (
		<Box width='100%' minHeight='100vh' padding='1vw'>
			<Box display='flex' justifyContent='center' alignItems='center' gap='5vw'>
				<Button onClick={() => dispatch(goToMainPage())}>Go Back</Button>
				<Typography align='center' variant='h4'>
					React Contributors List
				</Typography>
			</Box>
			<ContributorsListEnhanced />
		</Box>
	);
};
