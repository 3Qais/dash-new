// HeaderComponent.tsx
import React from "react";

import { useNavigate } from "@remix-run/react";

const HeaderComponent = ({ name }) => {
  const navigate = useNavigate();

  return (
    <div className="header z-50 flex ">
      {/* Left items (Logo) */}
      <h1 className={`title basis-full`}>{name}</h1>

      {/* Center Items */}
      <div className={`tabitems basis-full justify-center`}>
        <a href="https://forum.elysium.wtf/" className="topbarButton">
          Forum
        </a>
        <a href="https://minecraftscripts.com/" className="topbarButton">
          Scripts
        </a>
        <a href="https://elysium.wtf/" className="topbarButton">
          Home
        </a>
        <a href="https://dashboard.elysium.wtf/" className="topbarButton">
          Dashboard
        </a>
      </div>

      {/* Right Items (Login + Sign up)*/}
      <div className={`tabitems flex basis-full justify-end pr-2`}>
        <button
          style={{
            borderStyle: "solid",
            borderWidth: "0.5px",
            color: "#888888",
            backgroundColor: "transparent",
          }}
          className="button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button className="button" onClick={() => navigate("/register")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
