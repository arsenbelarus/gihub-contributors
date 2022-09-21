import {
	Contributor,
	GithubUser,
	RepositoryResponse,
} from '../types/domainTypes';
import {
	GithubUserFrontType,
	RepositoriesFrontType,
} from '../types/frontTypes';
import { contributorsApi } from './serviceConfig';

export class AppService {
	static async fetchContributors(
		currentPage: number,
		repoName: string = 'facebook/react'
	): Promise<GithubUserFrontType[]> {
		const { data } = await contributorsApi.get<Contributor[]>(
			`/repos/${repoName}/contributors?page=${currentPage}&per_page=10`
		);
		const logins = data.map((contributor) => contributor.login);
		return this.getAllContributorsInfo(logins);
	}
	static async fetchRepositories(payload: {
		searchValue: string;
		pageNumber: number;
	}): Promise<RepositoriesFrontType> {
		const { data } = await contributorsApi.get<RepositoryResponse>(
			`search/repositories?q=${payload.searchValue}+in%3Aname&type=Repositories&page=${payload.pageNumber}&per_page=6`
		);
		const contributors: Record<string, GithubUserFrontType[]> = {};
		for (const repo of data.items) {
			contributors[repo.full_name] = await this.fetchContributors(
				1,
				repo.full_name
			);
		}
		const repositories = data.items.map((item) => ({
			repoName: item.full_name,
			owner: item.owner.login,
			contributors: contributors[item.full_name],
		}));
		return {
			totalCount: data.total_count,
			repositories,
			isComplete: data.incomplete_results,
		};
	}
	private static async getAllContributorsInfo(logins: string[]) {
		let contributors: GithubUserFrontType[] = [];

		for (const login of logins) {
			const userDetails = await this.fetchContributorInfo(login);
			contributors.push(userDetails);
		}
		return contributors;
	}
	private static async fetchContributorInfo(
		login: string
	): Promise<GithubUserFrontType> {
		const { data } = await contributorsApi.get<GithubUser>(`users/${login}`);
		return {
			id: data.id,
			fullName: data.name,
			avatar: data.avatar_url,
			login: data.login,
			location: data.location,
			selfDescription: data.bio,
			createdAt: data.created_at,
		};
	}
}
