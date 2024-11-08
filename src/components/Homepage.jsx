import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = ({teams}) => {
  const navigate = useNavigate("")

const goToTeamPage = (event) => {
 console.log(event.target.innerHTML);
 if (event.target.innerHTML === "Ruff")
 {navigate("/ruff")}
 else if (event.target.innerHTML === "Fluff")
 {navigate ("/fluff")}
}
  return (
    <>
      <h2>Teams</h2>
      {teams.map((team)=> {
        return <section key={team.team.id} >
                  <h3 onClick={goToTeamPage}>{team.team.name}</h3> 
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