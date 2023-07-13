import React from "react";

function Card({ imageUrl, intro }) {
  return (
    <div
      style={{
        width: "45%",
        margin: "10px",
        padding: "10px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <img
        src={imageUrl}
        alt="Card"
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <p>{intro}</p>
    </div>
  );
}

export default Card;
