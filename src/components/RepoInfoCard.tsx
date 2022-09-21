import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GithubUserFrontType } from '../types/frontTypes';

const useStyles = makeStyles(() => ({
	card: {
		padding: '1vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '25vw',
		minHeight: '30vh',
		borderRadius: '1vw',
		border: '1px solid #000',
	},
	repoInfo: {
		display: 'flex',
		alignItems: 'center',
		gap: '2vw',
		marginBottom: '1vw',
		flexWrap: 'wrap',
	},
	repoContributors: {
		display: 'flex',
		flexWrap: 'wrap',
	},
}));

type Props = {
	repo: {
		repoName: string;
		owner: string;
		contributors: GithubUserFrontType[];
	};
};

export const RepoInfoCard = ({ repo }: Props) => {
	const classes = useStyles();

	return (
		<Box className={classes.card}>
			<Box className={classes.repoInfo}>
				<Typography variant='body1'>{repo.repoName}</Typography>
				<Typography variant='body1'>{repo.owner}</Typography>
			</Box>
			<Box className={classes.repoContributors}>
				{repo?.contributors?.map((contributor) => {
					return (
						<Typography
							key={contributor.id}
							variant='caption'
							marginRight='1vw'
						>
							{contributor.fullName || 'No info'}
						</Typography>
					);
				})}
			</Box>
		</Box>
	);
};
