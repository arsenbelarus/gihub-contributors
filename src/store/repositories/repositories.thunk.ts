import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppService } from '../../services/app.service';
import { RepositoriesFrontType } from '../../types/frontTypes';

export const getRepositories = createAsyncThunk<
	RepositoriesFrontType,
	{ searchValue: string; pageNumber: number }
>(
	'repositories/GET_REPOSITORIES',
	(payload: { searchValue: string; pageNumber: number }) =>
		AppService.fetchRepositories(payload)
);
