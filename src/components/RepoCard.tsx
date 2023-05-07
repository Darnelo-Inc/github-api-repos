import { IRepo } from "../models/models"

const RepoCard = ({ repo }: { repo: IRepo }) => {
  return (
    <div className="mb-2 px-5 py-3 border rounded hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="mr-2 font-bold">{repo.forks_count}</span>
          Watchers: <span className="font-bold">{repo.watchers_count}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
      </a>
    </div>
  )
}

export default RepoCard
