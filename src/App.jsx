import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import TeamOne from "./components/TeamOne";
import TeamTwo from "./components/TeamTwo";

const App = () => {

  return (
    <>
      <h1>Puppy Bowl 2.0</h1>
      <h2>Teams</h2>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/team-one" element={<TeamOne />} />
        <Route path="/team-two" element={<TeamTwo />} />
      </Routes>      
    </>
  )
}

export default App
