import { memo, useEffect, useState } from "react";
import "../assets/css/create-idea.css";

const CreateIdea = ({ onGenerateCritter }) => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  function resetInput() {
    setTitle("");
    setDes("");
  }

  function handleSubmit() {
    if (des.trim().length > 0) {
      onGenerateCritter(title, des);
      setOpenModal(false);
      resetInput();
    }
  }

  useEffect(() => {
    if (!openModal) return;

    function handleEscape(e) {
      if (e.key === "Escape") {
        setOpenModal(false);
        resetInput();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [openModal]);

  return (
    <>
      <button className="create_idea" onClick={() => setOpenModal(true)}>
        <img
          src="/assets/imgs/create-idea.avif"
          alt="Create Idea"
          className="img-default"
        />
        <img
          src="/assets/imgs/create-idea-hover.avif"
          alt="Create Idea"
          className="img-hover"
        />
      </button>

      {openModal && (
        <div className="modal-overlay">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <span
              onClick={() => {
                setOpenModal(false);
                resetInput();
              }}>
              &times;
            </span>
            <input
              type="text"
              placeholder="Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Write your idea here ..."
              value={des}
              onChange={(e) => setDes(e.target.value)}></textarea>
            <button className="save" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(CreateIdea);
