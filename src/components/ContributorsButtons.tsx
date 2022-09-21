import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ButtonsDirection } from '../consts';

const useStyles = makeStyles(() => ({
	buttonsGroup: {
		marginTop: '2vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '4vw',
	},
}));

type Props = {
	currentPage: number;
	onPaginationChange(direction: ButtonsDirection): void;
};

export const ContributorsButtons = (props: Props) => {
	const classes = useStyles();

	return (
		<Box className={classes.buttonsGroup}>
			<Button
				color='primary'
				variant='outlined'
				onClick={() => props.onPaginationChange(ButtonsDirection.PREVIOUS)}
				disabled={props.currentPage === 1}
			>
				Previous
			</Button>
			<Typography>{props.currentPage}</Typography>
			<Button
				color='primary'
				variant='outlined'
				onClick={() => props.onPaginationChange(ButtonsDirection.NEXT)}
				disabled={props.currentPage === 100}
			>
				Next
			</Button>
		</Box>
	);
};
