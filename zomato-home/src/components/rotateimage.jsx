import React, { useState } from "react";
import "./rotateimage.css"; 

function RotateImage() {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  return (
    <div className="rotate-wrapper">
      <h2>Rotate Image Example</h2>
      <div className="image-box">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/800px-June_odd-eyed-cat.jpg"
          alt="Rotatable"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 0.5s ease",
          }}
        />
      </div>
      <button onClick={handleRotate}>Rotate</button>
    </div>
  );
}

export default RotateImage;
