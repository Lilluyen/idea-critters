import { useEffect, useState } from "react";
import "./App.css";
import "./assets/css/create-idea.css";

import CreateIdea from "./components/CreateIdea";
import Critters from "./components/Critters";
import generateCritters from "./libs/generateCritters";
import saveToLocalStorage from "./libs/saveToLocalStorage";
import Effects from "./components/Effects";
import ActionModal from "./components/ActionModal";
import CreateIdeaModal from "./components/CreateIdeaModal";

function App() {
  const [critters, setCritters] = useState(() => {
    return JSON.parse(localStorage.getItem("ideas")) ?? [];
  });

  const [effects, setEffects] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [isShowActionModal, setIsShowActionModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  function handleGenerateCritter(title, des) {
    const newIdea = generateCritters(title, des);
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

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  useEffect(() => {
    if (!isOpenModal) return;

    function handleEscape(e) {
      if (e.key === "Escape") {
        setIsOpenModal(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpenModal]);

  function handleDelete() {}

  function handleEdit() {
    setIsOpenModal(true);
  }

  function handleClose() {
    setIsShowActionModal(false);
    setIsOpenModal(false);
    setSelectedIdea(null);
  }

  function handleCompleted() {}
  function handleOpenActionModal(idea) {
    setSelectedIdea(idea);
    setIsShowActionModal(true);
  }
  return (
    <div className="background">
      {effects.length > 0 ? <Effects effects={effects} /> : ""}
      <CreateIdea onOpenModal={handleOpenModal} />
      <Critters
        critters={critters}
        onOpenActionModal={handleOpenActionModal}
        selectedId={selectedIdea?.id}
      />
      {isShowActionModal && (
        <ActionModal
          idea={selectedIdea}
          actions={{
            onDelete: handleDelete,
            onEdit: handleEdit,
            onClose: handleClose,
            onCompleted: handleCompleted,
          }}
        />
      )}
      {isOpenModal && (
        <CreateIdeaModal
          onGenerateCritter={handleGenerateCritter}
          onClose={handleClose}
          selectedIdea={selectedIdea}
        />
      )}
    </div>
  );
}

export default App;
