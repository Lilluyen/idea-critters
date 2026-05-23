import "../assets/css/critter-content.css";

const ActionModal = ({ idea, actions }) => {
  return (
    <div className="critter-content-overlay">
      <div className="critter-content-modal">
        <h3>{idea.title}</h3>
        <p>{idea.des}</p>
        <div className="content-btn-group">
          <button
            className="complete-btn"
            onClick={() => actions.onCompleted()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              color="#fff">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
          <div className="content-action-group-btn">
            <button
              className="close-btn"
              onClick={() => actions.onClose(idea.id)}>
              Close
            </button>
            <button className="edit-btn" onClick={() => actions.onEdit()}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => actions.onDelete()}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
