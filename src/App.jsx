import { useState } from "react";
import "./App.css";
import CreateIdea from "./components/CreateIdea";
import Critters from "./components/Critters";
import generateCritters from "./libs/generateCritters";
import saveToLocalStorage from "./libs/saveToLocalStorage";

function App() {
  const [critters, setCritters] = useState(() => {
    return JSON.parse(localStorage.getItem("ideas")) ?? [];
  });

  function handleGenerateCritter(title, des) {
    const newIdea = generateCritters(title, des);
    saveToLocalStorage([...critters, newIdea]);
    setCritters((prev) => [...prev, newIdea]);
  }

  return (
    <div className="background">
      <CreateIdea onGenerateCritter={handleGenerateCritter} />
      <Critters critters={critters} />
    </div>
  );
}

export default App;
