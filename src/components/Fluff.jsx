import { useEffect, useState } from "react"

const TeamTwo = ({teamTwo}) => {
  const [benchedPlayers, setBenchedPlayers] = useState([]);
  const [fieldPlayers, setFieldPlayers] = useState([]);
  useEffect(()=>{
    console.log(teamTwo);
    const teamPlayers = teamTwo.players;
    const getBenchPlayers = () => {
      console.log(teamPlayers);
      const temp = teamPlayers.filter( (player) => {
        console.log(player.status);
        if (player.status === "bench")
        { return player }
      })
      setBenchedPlayers(temp)
    }
    const getFieldPlayers = () => {
      console.log(teamPlayers);
      const fieldPlayersFilter = teamPlayers.filter( (player) => {
        if (player.status === "field")
        { return player }
      })
      setFieldPlayers(fieldPlayersFilter)
    }
    getBenchPlayers();
    getFieldPlayers();

  },[])
  return (
    <>
    {<h2>{teamTwo.name}</h2>}
      <section>
        <h3>Lead Competitors</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Breed</th>
            </tr>
          </thead>
          <tbody>
        {fieldPlayers.map((player) => {
         return <tr key={player.id}>
          <td>{player.id}</td>
          <td>{player.name}</td>
          <td>{player.breed}</td>
          </tr>
        })}
          </tbody>
        </table>
      </section>
  <section>
    <h3>Elite Reinforcement</h3>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Breed</th>
        </tr>
      </thead>
      <tbody>
        {benchedPlayers.map((player)=>{
        return <tr key={player.id}>
          <td>{player.id}</td>
          <td>{player.name}</td>
          <td>{player.breed}</td>
        </tr>
        })}
      </tbody>
    </table>
  </section>
    </>
  )
}
export default TeamTwo