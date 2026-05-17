import "../assets/css/critters.css";

const Critters = ({ critters }) => {
  return (
    <div className="critters-container">
      {critters.map((idea) => {
        return (
          <button
            key={idea.id}
            className="critter-ideas bob-animation"
            style={{
              position: "absolute",
              left: `${idea.position.x}px`,
              top: `${idea.position.y}px`,
              willChange: "transform",
              userSelect: "none",
            }}>
            <div className="critter-idea-content ">
              <div className="critter-idea-img-container">
                <img
                  src={`${idea.src}`}
                  alt="idea"
                  className="critter-idea-imgs"
                />
              </div>
              <div className="critter-idea-desc">
                <span>{idea.title}</span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Critters;
