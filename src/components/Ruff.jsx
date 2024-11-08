import { useEffect, useState } from "react"

const TeamOne = ({teamOne}) => {
  const [benchedPlayers, setBenchedPlayers] = useState([]);
  const [fieldPlayers, setFieldPlayers] = useState([]);
  useEffect(()=>{
    console.log(teamOne);
    const teamPlayers = teamOne.players;
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
      <h2>{teamOne.name}</h2>
      <section>
        <h2>Lead Competitors</h2>
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
    <h2>Elite Reinforcement</h2>
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
export default TeamOne