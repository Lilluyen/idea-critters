const CreateIdea = ({ onOpenModal }) => {
  return (
    <>
      <button className="create_idea" onClick={() => onOpenModal()}>
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
    </>
  );
};

export default CreateIdea;
