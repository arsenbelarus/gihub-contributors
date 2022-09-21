import { StoreState } from '../store';

export const reactContributorsSelector = (store: StoreState) =>
	store.contributors.reactContributors;

export const isLoadingSelector = (store: StoreState) =>
	store.contributors.isLoading;

export const pageNumberSelector = (store: StoreState) =>
	store.contributors.pageNumber;

export const isErrorSelector = (store: StoreState) =>
	store.contributors.isError;
