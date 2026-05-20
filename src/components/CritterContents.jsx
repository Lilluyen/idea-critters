import { useEffect, useState } from "react";

const CritterContents = ({ idea }) => {
  const [position, setPosition] = useState({
    x: idea.position.x,
    y: idea.position.y,
  });

  const [velocity, setVelocity] = useState(() => {
    const a = (Math.random() - 0.5) * 4;
    const b = (Math.random() - 0.5) * 4;

    return {
      x: a,
      y: b,
    };
  });

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const size = 199;
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let vx = velocity.x;
        let vy = velocity.y;

        if (newX <= 0) {
          newX = 0;
          vx = Math.abs(vx);
          setFlipped(true);
        } else if (newX >= window.innerWidth - size) {
          newX = window.innerWidth - size;
          vx = -Math.abs(vx);
          setFlipped(true);
        }

        if (newY <= 0) {
          vy = Math.abs(vy);
          newY = 0;
        } else if (newY >= window.innerHeight - size) {
          vy = -Math.abs(vy);
          newY = window.innerHeight - size;
        }

        if (vx !== velocity.x || vy !== velocity.y) {
          setVelocity({
            x: vx,
            y: vy,
          });
        }

        if (Math.random() < 0.0005) {
          setFlipped((fl) => !fl);
        }
        return {
          x: newX,
          y: newY,
        };
      });
    }, 16);

    return () => clearInterval(interval);
  }, [velocity]);

  return (
    <button
      className="critter-ideas bob-animation"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        willChange: "transform",
        userSelect: "none",
      }}>
      <div className="critter-idea-content">
        <div className="critter-idea-img-container">
          <img
            src={idea.src}
            alt="idea"
            className="critter-idea-imgs"
            style={{
              transform: flipped ? "scaleX(-1)" : "scaleX(1)",
            }}
          />
        </div>

        <div className="critter-idea-desc">
          <span>{idea.title || "New Idea"}</span>
        </div>
      </div>
    </button>
  );
};

export default CritterContents;
