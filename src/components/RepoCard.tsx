import { MouseEvent, useState } from "react"
import { IRepo } from "../models/models"
import { useActions, useAppSelector } from "../hooks/reduxHooks"
import { favsSelector } from "../store/selectors/selectors"

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFav, removeFav } = useActions()
  const { favs } = useAppSelector(favsSelector)
  const [isFav, setIsFav] = useState<boolean>(favs.includes(repo.html_url))

  const addHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addFav(repo.html_url)
    setIsFav(true)
  }

  const removeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeFav(repo.html_url)
    setIsFav(false)
  }

  return (
    <div className="mb-2 px-5 py-3 border rounded hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="mr-2 font-bold">{repo.forks_count}</span>
          Watchers: <span className="font-bold">{repo.watchers_count}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>

        {isFav ? (
          <button
            className="mt-2 mr-2 px-4 py-2 bg-red-300 rounded hover:shadow-md transition-all"
            onClick={(e) => removeHandler(e)}
          >
            Remove
          </button>
        ) : (
          <button
            className="mt-2 mr-2 px-4 py-2 bg-yellow-300 rounded hover:shadow-md transition-all"
            onClick={(e) => addHandler(e)}
          >
            Add
          </button>
        )}
      </a>
    </div>
  )
}

export default RepoCard
