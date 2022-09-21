import { StoreState } from '../store';

export const repositoriesSelector = (store: StoreState) =>
	store.repositories.repositories;

export const isLoadingSelector = (store: StoreState) =>
	store.repositories.isLoading;

export const pageNumberSelector = (store: StoreState) =>
	store.repositories.pageNumber;

export const searchValueSelector = (store: StoreState) =>
	store.repositories.searchValue;
