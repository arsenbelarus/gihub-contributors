import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

export interface GenericLoadable<T> {
	data: T;
	isLoading?: boolean;
	error?: string;
}

type ActionReducerMapBuilderAsync<S> = ActionReducerMapBuilder<S> & {
	addAsyncCase(
		thunk: AsyncThunk<any, any, any>,
		selector: (state: S) => GenericLoadable<any>,
		fallBackData?: any
	): ActionReducerMapBuilder<S>;
};

export const builderWithAsyncCase = <T = any>(
	builder: ActionReducerMapBuilder<T>
): ActionReducerMapBuilderAsync<T> => ({
	...builder,
	addAsyncCase: (thunk, selector, fallBackData) =>
		builderWithAsyncCase(
			builder
				.addCase(thunk.fulfilled, (state: any, action: any) => {
					const selectedState = selector(state);
					selectedState.data =
						action.payload?.data ?? action.payload ?? fallBackData;
				})
				.addCase(thunk.rejected, (state: any, action: any) => {
					const selectedState = selector(state);
					selectedState.isLoading = false;
					selectedState.error = action?.error?.message;
				})
				.addCase(thunk.pending, (state: any) => {
					const selectedState = selector(state);
					selectedState.data = fallBackData ?? selectedState.data;
					selectedState.isLoading = true;
					selectedState.error = undefined;
				})
		),
});
