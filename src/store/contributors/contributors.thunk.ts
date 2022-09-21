import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppService } from '../../services/app.service';
import { GithubUserFrontType } from '../../types/frontTypes';

export const getReactContributors = createAsyncThunk<
	GithubUserFrontType[],
	number
>('contributors/GET_REACT_CONTRIBUTORS', (currentPage: number) =>
	AppService.fetchContributors(currentPage)
);
