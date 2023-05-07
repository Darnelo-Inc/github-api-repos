import { useAppSelector } from "../hooks/reduxHooks"

const FavoritesPage = () => {
  const { favs } = useAppSelector((state) => state.favs)

  if (!favs.length)
    return <h2 className="mt-4 font-bold text-center">There is nothing...</h2>

  return (
    <div className="flex justify-center h-screen w-screen mx-auto pt-10">
      <ol className="list-decimal">
        {favs?.map((fav) => (
          <li className="hover:underline hover:cursor-pointer" key={fav}>
            <a href={fav} target="_blank" rel="noreferrer">
              {fav}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default FavoritesPage
