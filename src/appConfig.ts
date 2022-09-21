declare global {
	interface Window {
		envConfig: {
			ENV: string;
			BASE_URL: string;
			TOKEN: string;
		};
	}
}

export const devConfig = {
	ENV: 'local',
	BASE_URL: 'https://api.github.com',
	TOKEN: process.env.REACT_APP_GITHUB_TOKEN,
};
export const appConfig = window.envConfig ?? devConfig;
