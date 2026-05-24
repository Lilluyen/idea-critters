import { useState } from "react";

const CreateIdeaModal = ({
  selectedIdea,
  onGenerateCritter,
  onEditIdea,
  onClose,
  isEdit,
}) => {
  const [title, setTitle] = useState(selectedIdea?.title ?? "");
  const [des, setDes] = useState(selectedIdea?.des ?? "");

  function resetInput() {
    setDes("");
    setTitle("");
  }
  function handleSubmit() {
    if (des.trim().length > 0) {
      onGenerateCritter(title, des);
      resetInput();
      onClose();
    }
  }

  function handleEdit() {
    if (des.trim().length > 0) {
      onEditIdea(title, des);
      resetInput();
      onClose();
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span
          onClick={() => {
            resetInput();
            onClose();
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
        <button className="save" onClick={isEdit ? handleEdit : handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateIdeaModal;
