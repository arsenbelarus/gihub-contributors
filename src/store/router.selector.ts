import { StoreState } from './store';

export const locationSelector = (state: StoreState) => state.router.location;
