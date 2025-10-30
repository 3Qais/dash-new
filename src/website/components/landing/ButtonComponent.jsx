// ButtonComponent.tsx

import React from "react";

const ButtonComponent = ({ text, inactive = false, onClick }) => {
  const buttonClasses = inactive ? "button2 inactive" : "button2";

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
