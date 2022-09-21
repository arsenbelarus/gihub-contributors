import { ComponentType, FC, useCallback } from 'react';
import { changePageNumber } from '../store/repositories/repositories.reducer';
import {
	isLoadingSelector,
	repositoriesSelector,
} from '../store/repositories/repositories.selector';
import { useAppDispatch, useAppSelector } from '../store/store';
import {
	GithubUserFrontType,
	RepositoriesFrontType,
} from '../types/frontTypes';

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

export const withRepositoriesList =
	(BaseComponent: ComponentType<Props>): FC =>
	() => {
		const dispatch = useAppDispatch();
		const isLoading = useAppSelector(isLoadingSelector);
		const { totalCount, repositories, isComplete }: RepositoriesFrontType =
			useAppSelector(repositoriesSelector);

		const handlePaginationChange = useCallback(
			(page: number) => dispatch(changePageNumber(page)),
			[dispatch]
		);

		return (
			<BaseComponent
				isLoading={isLoading}
				totalCount={totalCount}
				repositories={repositories}
				isDone={isComplete}
				onPaginationChange={handlePaginationChange}
			/>
		);
	};
