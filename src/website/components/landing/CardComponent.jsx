// CardComponent.tsx

import React from "react";

const CardComponent = ({ title, description, image }) => {
  return (
    <div style={{ marginTop: "30px", height: "155px" }}>
      <div className="flex sm:items-start sm:flex-col flex-row justify-center items-center gap-2">
        <img
          alt="WHAT?"
          style={{ width: "20px", height: "20px" }}
          src={image}
        />

        <h1
          style={{
            fontSize: "19px",
            color: "#FFFFFF",
            fontWeight: 600,
          }}
        >
          {title}
        </h1>
      </div>

      <h1
        style={{
          marginTop: "7px",
          color: "#888888",
          fontSize: "14px",
        }}
      >
        {description}
      </h1>
    </div>
  );
};

export default CardComponent;
