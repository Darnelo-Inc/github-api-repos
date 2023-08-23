import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 text-white bg-gray-500 shadow-md">
      <h3 className="font-bold">Github search</h3>

      <span>
        <Link className="mr-5" to="/">
          Home
        </Link>
        <Link to="/favs">Favorites</Link>
      </span>
    </nav>
  )
}

export default Navigation
