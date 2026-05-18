const Effects = ({ effects }) => {
  console.log(effects);
  return (
    <div
      className="boom"
      style={{
        position: "absolute",
        left: `${effects[0].x}px`,
        top: `${effects[0].y}px`,
        height: "310px",
        width: "310px",
        zIndex: "2",
        pointerEvents: "none",
      }}>
      <img
        src="/assets/imgs/boom.webp"
        alt="boom"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Effects;
