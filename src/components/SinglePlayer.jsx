import { useParams } from "react-router-dom";



const SinglePlayer = ({teamOne, teamTwo}) => {
  const { playerParam } = useParams();
  console.log(teamOne);
  const teamOnePlayers = teamOne.players;
  console.log(teamOnePlayers);
  const teamTwoPlayers = teamTwo.players;
  console.log(teamTwoPlayers);
  // const playerData = teams.map((team) => { return team.team.players});
  // console.log(playerData);
  // playerData.map((team) => {console.log(team)})
  
  return (
    <>
    {<SelectedSinglePlayer />}
    </>
  )
}

const SelectedSinglePlayer = () => {
  return (
    <>
      <h2>player.name</h2>
      <img src="" alt="player.name" />
      <section>
        <h3>ID number</h3>
        <p>player.id</p>
      </section>
      <section>
        <h3>Breed</h3>
        <p>player.breed</p>
      </section>
      <section>
        <h3>status</h3>
        <p>player.status</p>
      </section>
      <section>
        <h3> About player.name</h3>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Felis aenean nibh placerat tincidunt hendrerit tristique aenean aptent maecenas. Aptent sociosqu montes fermentum porttitor inceptos. Sodales bibendum imperdiet quisque mattis suspendisse ut neque lobortis.</p>
      </section>
    </>
  )
}
export default SinglePlayer