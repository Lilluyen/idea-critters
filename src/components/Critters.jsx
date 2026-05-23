import "../assets/css/critters.css";
import CritterContents from "./CritterContents";

const Critters = ({ critters, onOpenActionModal, selectedId }) => {
  return (
    <div className="critters-container">
      {critters.map((idea) => {
        return (
          <CritterContents
            idea={idea}
            key={idea.id}
            handleOpenActionModal={onOpenActionModal}
            isPaused={selectedId === idea.id}
          />
        );
      })}
    </div>
  );
};

export default Critters;
