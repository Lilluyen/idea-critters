const Effects = ({ effects }) => {
  console.log(effects);
  return (
    <div
      className="boom"
      style={{
        position: "absolute",
        left: `${effects[0].x}px`,
        top: `${effects[0].y}px`,
        height: "210px",
        width: "210px",
        zIndex: "2",
        scale: "1.3",
        pointerEvents: "none",
      }}>
      <img
        src="/assets/imgs/boom.webp"
        alt="boom"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Effects;
