import "./App.css";
import CreateIdea from "./components/CreateIdea";
import Critters from "./components/Critters";

function App() {
  function handleGenerateCritter() {}
  return (
    <div className="background">
      <Critters />
      <CreateIdea onGenerateCritter={handleGenerateCritter} />
    </div>
  );
}

export default App;
