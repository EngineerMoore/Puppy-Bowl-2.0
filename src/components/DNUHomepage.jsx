import { useEffect, useState } from "react"

const Homepage = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams`);
      const data = await response.json();
      const teamsObject = data.data;
      const returnedTeams = teamsObject.teams
      console.log(teamsObject);
      console.log(returnedTeams);
      setTeams(returnedTeams);
    }
    fetchTeams();
}, [])
console.log(teams);


  // const teamSection = document.querySelector(`#fluff`);
  // console.log(teamSection);
//   const imgElement = document.createElement(`img`);
//   console.log(imgElement);
//   const imgAttribute = imgElement.setAttribute(`alt`, `dogs playing`);
//   console.log(imgAttribute);
//   teamSection.append(imgElement);
// })

const img = teams.map((team) => {return document.querySelector(`#${team.name}`)})
  const teamOneImg = img[0];
  console.log(teams);
  teamOneImg.setAttribute(`src`, `https://th.bing.com/th/id/OIP.aZiENz8pOREsplmybi3wUQHaFs?w=204&h=180&c=7&r=0&o=5&pid=1.7`)

  return (
    <>
        {teams.map((team)=> { 
          return <section key={team.id}>
                    <h3>{team.name}</h3> 
                    <img 
                      alt="dogs playing"
                      id={team.name}
                    />
                  </section>
          })}



        <img
          src="https://th.bing.com/th/id/OIP.aZiENz8pOREsplmybi3wUQHaFs?w=204&h=180&c=7&r=0&o=5&pid=1.7"
          alt="dogs playing"
        />
      <section onClick={() =>{console.log(`bye`)}}>
        <h3>Team 2</h3>
        <img
          src="https://th.bing.com/th/id/OIP.Xs_e9BFW6SSibW2vOSnUqgHaE8?w=249&h=180&c=7&r=0&o=5&pid=1.7"
          alt="dogs playing"
        />
      </section>
    </>
  )
}
export default Homepage