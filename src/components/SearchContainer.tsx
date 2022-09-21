import { ChangeEvent } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Button, TextField } from '@mui/material';

const useStyles = makeStyles(() => ({
	searchContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '2vw',
		minWidth: '30vw',
	},
}));

type Props = {
	searchValue: string;
	onSearchValueChange(value: string): void;
	onSearch(): void;
	onGoBack(): void;
};

export const SearchContainer = (props: Props) => {
	const classes = useStyles();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		props.onSearchValueChange(e.target.value);
	};

	return (
		<Box className={classes.searchContainer}>
			<Button style={{ width: '10vw' }} onClick={() => props.onGoBack()}>
				Go Back
			</Button>
			<TextField
				variant='outlined'
				value={props.searchValue}
				onChange={handleInputChange}
				size='small'
				placeholder='Search some repo...'
				fullWidth
			/>
			<Button onClick={() => props.onSearch()}>Search</Button>
		</Box>
	);
};
