"use server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN as string,
});

interface Stargazer {
  id: number;
  login: string;
  avatar_url: string;
}

type GithubResponse = {
  stargazers: Stargazer[];
  stargazerCount: number;
};

export const getStargazers = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}): Promise<GithubResponse> => {
  try {
    const [resStargazers, resCount] = await Promise.all([
      octokit.rest.activity.listStargazersForRepo({
        owner,
        repo,
        per_page: 10,
      }),
      octokit.request("GET /repos/{owner}/{repo}", {
        owner: owner,
        repo: repo,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
          Accept: "application/vnd.github+json",
        },
      }),
    ]);
    const stargazers_count = resCount?.data.stargazers_count;

    if (!stargazers_count || !Array.isArray(resStargazers.data)) {
      return { stargazers: [], stargazerCount: 0 };
    }
    if (Array.isArray(resStargazers.data)) {

      const stargazers = (resStargazers?.data as Stargazer[])?.map((o) => ({
        login: o.login,
        avatar_url: o.avatar_url,
        id: o.id,
      }));

      return { stargazers, stargazerCount: stargazers_count };
    }
  } catch (error) {
    console.log(error);
  }
  return { stargazers: [], stargazerCount: 0 };
};
