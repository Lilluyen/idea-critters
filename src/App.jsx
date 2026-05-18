import { useState } from "react";
import "./App.css";
import CreateIdea from "./components/CreateIdea";
import Critters from "./components/Critters";
import generateCritters from "./libs/generateCritters";
import saveToLocalStorage from "./libs/saveToLocalStorage";
import Effects from "./components/Effects";

function App() {
  const [critters, setCritters] = useState(() => {
    return JSON.parse(localStorage.getItem("ideas")) ?? [];
  });

  const [effects, setEffects] = useState([]);

  function handleGenerateCritter(title, des) {
    const newIdea = generateCritters(title, des);
    saveToLocalStorage([...critters, newIdea]);
    setEffects((prev) => [
      ...prev,
      {
        id: newIdea.id,
        x: newIdea.position.x,
        y: newIdea.position.y,
      },
    ]);
    setTimeout(() => {
      setEffects((prev) => prev.filter((e) => e.id !== newIdea.id));

      setCritters((prev) => {
        const updated = [...prev, newIdea];
        saveToLocalStorage(updated);
        return updated;
      });
    }, 1500);
  }

  return (
    <div className="background">
      {effects.length > 0 ? <Effects effects={effects} /> : ""}
      <CreateIdea onGenerateCritter={handleGenerateCritter} />
      <Critters critters={critters} />
    </div>
  );
}

export default App;
