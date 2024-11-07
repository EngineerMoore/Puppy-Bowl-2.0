import { Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Ruff from "./components/Ruff";
import Fluff from "./components/Fluff";

const App = () => {

  return (
    <>
      <h1>Puppy Bowl 2.0</h1>
      <h2>Teams</h2>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ruff" element={<Ruff />} />
        <Route path="/fluff" element={<Fluff />} />
      </Routes>      
    </>
  )
}

export default App
