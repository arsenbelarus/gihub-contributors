import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ButtonsDirection } from '../consts';
import { GithubUserFrontType } from '../types/frontTypes';
import { ContributorInfoCard } from './ContributorInfoCard';
import { ContributorsButtons } from './ContributorsButtons';

const useStyles = makeStyles(() => ({
	cardsContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
		gap: '4vw',
		marginTop: '3vw',
	},
	buttonsGroup: {
		marginTop: '2vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '4vw',
	},
	circularProgress: {
		textAlign: 'center',
		marginTop: '5vw',
	},
}));

type Props = {
	contributorsList: GithubUserFrontType[];
	isLoading: boolean;
	errorMessage: string;
	currentPage: number;
	onPaginationChange(direction: ButtonsDirection): void;
};

export const ContributorsList = (props: Props) => {
	const classes = useStyles();

	return (
		<>
			<ContributorsButtons
				currentPage={props.currentPage}
				onPaginationChange={props.onPaginationChange}
			/>
			<Box className={classes.cardsContainer}>
				{props.isLoading ? (
					<CircularProgress
						size={28}
						color='primary'
						className={classes.circularProgress}
					/>
				) : (
					props.contributorsList.map((contributor) => (
						<ContributorInfoCard
							key={contributor.id}
							contributor={contributor}
						/>
					))
				)}
			</Box>
		</>
	);
};
