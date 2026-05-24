import { useState } from "react";
import "./App.css";
import "./assets/css/create-idea.css";

import CreateIdea from "./components/CreateIdea";
import Critters from "./components/Critters";
import generateCritters from "./libs/generateCritters";
import saveToLocalStorage from "./libs/saveToLocalStorage";
import Effects from "./components/Effects";
import ActionModal from "./components/ActionModal";
import CreateIdeaModal from "./components/CreateIdeaModal";
import editIdea from "./libs/editIdea";
import completeIdea from "./libs/completeIdea";
import unCompleteIdea from "./libs/unCompleteIdea";
import deleteIdeaFromLocalStorage from "./libs/deleteIdeaFromLocalStorage";

function App() {
  const [critters, setCritters] = useState(() => {
    return JSON.parse(localStorage.getItem("ideas")) ?? [];
  });

  const [effects, setEffects] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [isShowActionModal, setIsShowActionModal] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [position, setPosition] = useState({});

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

  function handleEditIdea(title, desc) {
    const updatedIdeas = editIdea(selectedIdea.id, title, desc);
    if (updatedIdeas) {
      setCritters(updatedIdeas);
      setIsOpenModal(false);
      setIsShowActionModal(false);
      setSelectedIdea(null);
    }
  }

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleDelete() {
    const updatedIdeas = deleteIdeaFromLocalStorage(selectedIdea);
    if (updatedIdeas) setCritters(updatedIdeas);
    setIsOpenModal(false);
    setIsShowActionModal(false);
    setSelectedIdea(null);
    setEffects((prev) => [
      ...prev,
      {
        id: selectedIdea.id,
        x: position.x,
        y: position.y,
      },
    ]);
    setTimeout(() => {
      setEffects((prev) => prev.filter((e) => e.id !== selectedIdea.id));
    }, 1500);
  }

  function handleEdit() {
    setIsOpenModal(true);
    setIsEdit(true);
  }

  function handleClose() {
    if (isEdit) {
      setIsOpenModal(false);
      setIsEdit(false);
      return;
    }
    setIsOpenModal(false);
    setIsShowActionModal(false);
    setSelectedIdea(null);
  }

  function handleCompleted() {
    let updatedIdeas = null;
    if (!selectedIdea.isCompleted) {
      updatedIdeas = completeIdea(selectedIdea.id);
    }
    if (selectedIdea.isCompleted) {
      updatedIdeas = unCompleteIdea(selectedIdea.id);
    }
    if (updatedIdeas) {
      setCritters(updatedIdeas);
      setIsShowActionModal(false);
      setSelectedIdea(null);
    }
  }
  function handleOpenActionModal(idea, position) {
    setSelectedIdea(idea);
    setIsShowActionModal(true);
    setPosition(position);
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
          onEditIdea={handleEditIdea}
          isEdit={isEdit}
        />
      )}
    </div>
  );
}

export default App;
