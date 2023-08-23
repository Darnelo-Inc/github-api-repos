import { useEffect, useState } from "react"
import {
  useLazyFetchReposQuery,
  useSearchUsersQuery,
} from "../store/API/githubAPI"
import { useDebounce } from "../hooks/useDebounce"
import RepoCard from "../components/RepoCard"

const HomePage = () => {
  const [isFound, setIsFound] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")
  const [vis, setVis] = useState<boolean>(false)
  const debounce = useDebounce(search)
  const {
    data: users,
    isLoading,
    isError,
  } = useSearchUsersQuery(debounce, {
    skip: debounce?.length < 3,
    refetchOnFocus: true,
  })
  const [
    getRepos,
    { data: repos, isLoading: reposLoading, isError: reposError },
  ] = useLazyFetchReposQuery()

  const clickHandler = (user: string) => {
    setVis(false)
    setIsFound(true)
    getRepos(user)
    setSearch(user)
  }

  useEffect(() => {
    if (isFound) setIsFound(false)
    setVis(search?.length > 2 && !isFound ? true : false)
  }, [search])

  return (
    <div className="flex justify-center h-screen w-screen mx-auto pt-10">
      {isError && (
        <h2 className="text-center font-bold text-red-600">Error occured</h2>
      )}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="h-[42px] w-full mb-2 px-4 py-2 border"
          placeholder="Search for gitHub username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {vis && (
          <ul className="absolute t-[42px] right-0 left-0 max-h-[200px] bg-white shadow-md overflow-y-scroll">
            {isLoading && <p className="text-center">Loading...</p>}
            {users?.map((user) => (
              <p
                className="px-4 py-2 hover:text-white hover:cursor-pointer hover:bg-gray-500 transition-colors"
                key={user.id}
                onClick={() => clickHandler(user.login)}
              >
                {user.login}
              </p>
            ))}
          </ul>
        )}
        <div className="container">
          {reposLoading && <p className="text-center">Repos are loading...</p>}
          {reposError && (
            <h2 className="text-center font-bold text-red-600">
              Error occured
            </h2>
          )}
          {repos?.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
