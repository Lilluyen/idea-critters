import { memo, useEffect, useState } from "react";
import "../assets/css/create-idea.css";

const CreateIdea = ({ onGenerateCritter }) => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  function handleSubmit() {
    onGenerateCritter();

    if (des.trim().length > 0) setOpenModal(false);
  }

  useEffect(() => {
    if (!openModal) return;

    function handleEscape(e) {
      if (e.key === "Escape") {
        setOpenModal(false);
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
          <span onClick={() => setOpenModal(false)}>&times;</span>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
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
