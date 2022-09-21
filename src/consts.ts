export const routes = {
	contributors: '/react-contributors',
	search: '/search-repositories',
	base: process.env.PUBLIC_URL,
} as const;

export enum ButtonsDirection {
	NEXT = 'Next',
	PREVIOUS = 'Previous',
}
