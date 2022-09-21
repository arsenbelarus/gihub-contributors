import { Avatar, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { GithubUserFrontType } from '../types/frontTypes';

const useStyles = makeStyles(() => ({
	card: {
		padding: '1vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		width: '25vw',
		minHeight: '20vh',
		borderRadius: '1vw',
		border: '1px solid #000',
	},
	avatarContainer: {
		display: 'flex',
		alignItems: 'center',
		gap: '3vw',
		marginBottom: '1vw',
	},
	detailInfoContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
}));

type Props = {
	contributor: GithubUserFrontType;
};

export const ContributorInfoCard = ({ contributor }: Props) => {
	const classes = useStyles();
	const date = new Date(contributor.createdAt).toLocaleDateString();

	return (
		<Box className={classes.card}>
			<Box className={classes.avatarContainer}>
				<Avatar src={contributor.avatar} alt={contributor.fullName} />
				<Typography variant='h6'>{contributor.fullName}</Typography>
			</Box>
			<Box className={classes.detailInfoContainer}>
				<Typography variant='body1'>
					{contributor.location || 'No info'}
				</Typography>
				<Typography variant='body2'>Created {date}</Typography>
			</Box>
		</Box>
	);
};
