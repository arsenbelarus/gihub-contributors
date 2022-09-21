import { ComponentType, FC, useCallback } from 'react';
import { ButtonsDirection } from '../consts';
import { changePageNumber } from '../store/contributors/contributors.reducer';
import {
	isErrorSelector,
	isLoadingSelector,
	pageNumberSelector,
	reactContributorsSelector,
} from '../store/contributors/contributors.selector';
import { useAppDispatch, useAppSelector } from '../store/store';
import { GithubUserFrontType } from '../types/frontTypes';

type Props = {
	contributorsList: GithubUserFrontType[];
	isLoading: boolean;
	errorMessage: string;
	currentPage: number;
	onPaginationChange(direction: ButtonsDirection): void;
};

export const withContributorsList =
	(BaseComponent: ComponentType<Props>): FC =>
	() => {
		const dispatch = useAppDispatch();
		const contributorsList = useAppSelector(reactContributorsSelector);
		const isLoading = useAppSelector(isLoadingSelector);
		const currentPage = useAppSelector(pageNumberSelector);
		const isError = useAppSelector(isErrorSelector);

		const onPaginationChange = useCallback(
			(direction: ButtonsDirection) => {
				dispatch(changePageNumber(direction));
			},
			[dispatch]
		);

		return (
			<BaseComponent
				contributorsList={contributorsList}
				currentPage={currentPage}
				isLoading={isLoading}
				errorMessage={isError ? 'Something went wrong' : ''}
				onPaginationChange={onPaginationChange}
			/>
		);
	};
