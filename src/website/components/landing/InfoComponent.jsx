// InfoComponent.tsx

import React from "react";

const InfoComponent = ({ title, description }) => {
  return (
    <div
      className="info"
      style={{
        marginTop: "50px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#111111",
          borderRadius: "10px",
          width: "500px",
          padding: "20px",
        }}
      >
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default InfoComponent;
