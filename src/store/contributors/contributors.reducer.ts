import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ButtonsDirection } from '../../consts';
import { GithubUserFrontType } from '../../types/frontTypes';
import { getReactContributors } from './contributors.thunk';

type State = {
	isLoading: boolean;
	reactContributors: GithubUserFrontType[];
	pageNumber: number;
	perPage: number;
	isError: boolean;
};

type Reducers = {
	changePageNumber: CaseReducer<State, PayloadAction<ButtonsDirection>>;
	clearContributorsData: CaseReducer<State>;
};

const initialState: State = {
	isLoading: false,
	isError: false,
	reactContributors: [],
	pageNumber: 1,
	perPage: 10,
};

const slice = createSlice<State, Reducers, 'contributorsReducer'>({
	name: 'contributorsReducer',
	initialState,
	reducers: {
		changePageNumber: (state, action) => {
			state.reactContributors = [];
			if (action.payload === ButtonsDirection.PREVIOUS) {
				state.pageNumber -= 1;
			}
			if (action.payload === ButtonsDirection.NEXT) {
				state.pageNumber += 1;
			}
		},
		clearContributorsData: (state) => {
			state.reactContributors = [];
			state.pageNumber = 1;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getReactContributors.pending, (state) => {
			state.reactContributors = [];
			state.isError = false;
			state.isLoading = true;
		});
		builder.addCase(getReactContributors.fulfilled, (state, action) => {
			state.isLoading = false;
			state.reactContributors = action.payload;
		});
		builder.addCase(getReactContributors.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export const { changePageNumber, clearContributorsData } = slice.actions;

export default slice.reducer;
