export type GithubUserFrontType = {
	fullName: string;
	avatar: string;
	location: string;
	selfDescription: string;
	createdAt: string;
	id: number;
	login: string;
};

export type RepositoriesFrontType = {
	totalCount: number;
	repositories: {
		repoName: string;
		owner: string;
		contributors: GithubUserFrontType[];
	}[];
	isComplete: boolean;
};
