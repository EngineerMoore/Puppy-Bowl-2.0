import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [teams, setTeams] = useState([])
  // const navigate = useNavigate("")

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams`);
      const data = await response.json();
      const teamsObject = data.data;
      console.log(teamsObject);
      const returnedTeams = teamsObject.teams
      console.log(returnedTeams);

      let teamsWithImage = []
      teamsWithImage = [
        {team: returnedTeams[0], img: `https://th.bing.com/th/id/OIP.aZiENz8pOREsplmybi3wUQHaFs?w=204&h=180&c=7&r=0&o=5&pid=1.7`},
        {team: returnedTeams[1], img: `https://th.bing.com/th/id/OIP.Xs_e9BFW6SSibW2vOSnUqgHaE8?w=249&h=180&c=7&r=0&o=5&pid=1.7`}
        ]
      console.log(teamsWithImage);
      setTeams(teamsWithImage);
    }
    fetchTeams();

}, [])

// team.team.name ===
  return (
    <>
        {teams.map((team)=> {
          return <section key={team.team.id} onClick={() => {}}>
                    <h3>{team.team.name}</h3> 
                    <img 
                      alt="dogs playing"
                      src={team.img}
                    />
                  </section>
          })}

    </>
  )
}
export default Homepage