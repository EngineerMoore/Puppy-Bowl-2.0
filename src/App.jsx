import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Ruff from "./components/Ruff";
import Fluff from "./components/Fluff";

const App = () => {
  const [teams, setTeams] = useState([]);
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/teams`);
      const data = await response.json();
      const teamsObject = data.data;
      console.log(teamsObject);
      const returnedTeams = teamsObject.teams
      console.log(returnedTeams);
      setTeamOne(returnedTeams[0]);
      setTeamTwo(returnedTeams[1]);
      let teamsWithImage = []
      teamsWithImage = [
        {teamNumber: 1, team: returnedTeams[0], img: `https://th.bing.com/th/id/OIP.aZiENz8pOREsplmybi3wUQHaFs?w=204&h=180&c=7&r=0&o=5&pid=1.7`},
        {teamNumber: 2, team: returnedTeams[1], img: `https://th.bing.com/th/id/OIP.Xs_e9BFW6SSibW2vOSnUqgHaE8?w=249&h=180&c=7&r=0&o=5&pid=1.7`}
        ]
      console.log(teamsWithImage);
      setTeams(teamsWithImage);
    }
    fetchTeams();

}, [])

// console.log(teamOne);
  return (
    <>
      <h1>Puppy Bowl 2.0</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage teams={teams}/>} />
        <Route path="/ruff" element={<Ruff teamOne={teamOne}/>} />
        <Route path="/fluff" element={<Fluff teamTwo={teamTwo}/>} />
        <Route path="/ruff/:player" element/>
        <Route path="/fluff/:player" element/>
      </Routes>      
    </>
  )
}

export default App
