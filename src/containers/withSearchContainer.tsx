import { ComponentType, FC, useCallback } from 'react';
import {
	goBack,
	searchRepositories,
} from '../store/repositories/repositories.actions';
import { changeSearchValue } from '../store/repositories/repositories.reducer';
import {
	isLoadingSelector,
	repositoriesSelector,
	searchValueSelector,
} from '../store/repositories/repositories.selector';
import { useAppDispatch, useAppSelector } from '../store/store';
import {
	GithubUserFrontType,
	RepositoriesFrontType,
} from '../types/frontTypes';

type Props = {
	searchValue: string;
	isLoading: boolean;
	totalCount: number;
	repositories: {
		repoName: string;
		owner: string;
		contributors: GithubUserFrontType[];
	}[];
	isDone: boolean;
	onSearchValueChange(value: string): void;
	onSearch(): void;
	onGoBack(): void;
};

export const withSearchContainer =
	(BaseComponent: ComponentType<Props>): FC =>
	() => {
		const dispatch = useAppDispatch();
		const searchValue = useAppSelector(searchValueSelector);
		const isLoading = useAppSelector(isLoadingSelector);
		const { totalCount, repositories, isComplete }: RepositoriesFrontType =
			useAppSelector(repositoriesSelector);

		const handleSearchValueChange = useCallback(
			(value: string) => dispatch(changeSearchValue(value)),
			[dispatch]
		);

		const handleSearch = useCallback(
			() => dispatch(searchRepositories()),
			[dispatch]
		);
		const handleGoBack = useCallback(() => dispatch(goBack()), [dispatch]);

		return (
			<BaseComponent
				searchValue={searchValue}
				isLoading={isLoading}
				totalCount={totalCount}
				repositories={repositories}
				isDone={isComplete}
				onSearch={handleSearch}
				onGoBack={handleGoBack}
				onSearchValueChange={handleSearchValueChange}
			/>
		);
	};
