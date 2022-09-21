import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepositoriesFrontType } from '../../types/frontTypes';
import { getRepositories } from './repositories.thunk';

type State = {
	isLoading: boolean;
	repositories: RepositoriesFrontType;
	pageNumber: number;
	isError: boolean;
	searchValue: string;
};

type Reducers = {
	changePageNumber: CaseReducer<State, PayloadAction<number>>;
	changeSearchValue: CaseReducer<State, PayloadAction<string>>;
	clearRepositoriesData: CaseReducer<State>;
};

const initialState: State = {
	isLoading: false,
	isError: false,
	repositories: {
		isComplete: false,
		totalCount: 0,
		repositories: [],
	},
	pageNumber: 1,
	searchValue: '',
};

const slice = createSlice<State, Reducers, 'repositoriesReducer'>({
	name: 'repositoriesReducer',
	initialState,
	reducers: {
		changePageNumber: (state, action) => {
			state.repositories.repositories = [];
			state.pageNumber = action.payload;
		},
		changeSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
		clearRepositoriesData: (state) => {
			state.repositories = {
				isComplete: false,
				totalCount: 0,
				repositories: [],
			};
			state.pageNumber = 1;
			state.searchValue = '';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getRepositories.pending, (state) => {
			state.repositories.repositories = [];
			state.isError = false;
			state.isLoading = true;
		});
		builder.addCase(getRepositories.fulfilled, (state, action) => {
			state.isLoading = false;
			state.repositories = action.payload;
		});
		builder.addCase(getRepositories.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export const { changePageNumber, changeSearchValue, clearRepositoriesData } =
	slice.actions;

export default slice.reducer;
