import { useState } from "react";
import "../assets/css/create-idea.css";

const CreateIdea = () => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className="create_idea"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img
        src={
          hover
            ? "/assets/imgs/create-idea-hover.avif"
            : "/assets/imgs/create-idea.avif"
        }
        alt="Create Idea"
      />
    </button>
  );
};

export default CreateIdea;
