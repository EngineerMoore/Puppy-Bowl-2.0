import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav>
        <input placeholder="Search..."/>
        <Link to="/">Home</Link>
        <Link to="/ruff">Ruff</Link>
        <Link to="/fluff">Fluff</Link>
      </nav>
    </>
  )
}
export default NavBar