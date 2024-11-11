import { Link, useNavigate } from "react-router-dom";
import  { useState } from "react";

const NavBar = ({ teams, setPlayersData }) => {
const [search, setSearch] = useState();
const navigate = useNavigate()

  console.log (teams);
  const allPlayers = teams.map((team) => {return team.team.players});
  console.log(allPlayers);
  // setPlayersData(allPlayers);
  const playersListed = [];
  allPlayers.map((team) => {return team.forEach((player) =>  playersListed.push(player.name))});
  

  const singlePlayerLink = (event) => {
    console.log(event.target.innerHTML);
    const clickedPlayer = event.target.innerHTML
    navigate("/players/"+clickedPlayer);
    setSearch(``)
  }
  return (
    <>
      <nav>
        <section>
          <input
            type="text"
            placeholder="Search Players..."
            onChange={(e)=> setSearch(e.target.value.toLowerCase())}
            value={search}
          />
          <ul>
        {playersListed
          .filter( (player) => {
            return search === ''?
              null:
              player.toLowerCase().includes(search)
            })
          .map( (player)=> { return <li onClick={(event)=>{singlePlayerLink(event)}}>{player}</li>})}
          </ul>
          
        </section>

        <Link to="/">Home</Link>
        <Link to="/ruff">Ruff</Link>
        <Link to="/fluff">Fluff</Link>
      </nav>
    </>
  )
}
export default NavBar