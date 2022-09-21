import { Box, CircularProgress, Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ChangeEvent } from 'react';
import { GithubUserFrontType } from '../types/frontTypes';
import { RepoInfoCard } from './RepoInfoCard';

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
	},
}));

type Props = {
	isLoading: boolean;
	totalCount: number;
	repositories: {
		repoName: string;
		owner: string;
		contributors: GithubUserFrontType[];
	}[];
	isDone: boolean;
	onPaginationChange(page: number): void;
};

export const RepositoriesList = (props: Props) => {
	const classes = useStyles();

	const handlePaginationChange = (
		event: ChangeEvent<unknown>,
		value: number
	) => {
		props.onPaginationChange(value);
	};

	return (
		<>
			<Box className={classes.cardsContainer}>
				{props.isLoading ? (
					<CircularProgress
						size={28}
						color='primary'
						className={classes.circularProgress}
					/>
				) : (
					props.repositories.map((repo) => (
						<RepoInfoCard key={repo.repoName} repo={repo} />
					))
				)}
			</Box>
			<Pagination count={props.totalCount} onChange={handlePaginationChange} />
		</>
	);
};
