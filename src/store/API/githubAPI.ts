import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IRepo, IUser, ServerResponse } from "../../models/models"

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    searchUsers: build.query<IUser[], string>({
      query: (search: string) => ({
        url: "search/users",
        params: { q: search, per_page: 10 },
      }),
      transformResponse: (res: ServerResponse<IUser>) => res.items,
    }),

    fetchRepos: build.query<IRepo[], string>({
      query: (user: string) => ({
        url: `users/${user}/repos`,
      }),
    }),
  }),
})

export const { useSearchUsersQuery, useLazyFetchReposQuery } = githubApi
