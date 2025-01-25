import React from "react";

const Header = ({ title, slogon }) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "10px",
        marginBottom: "10px",
        fontSize: "32px",
        color: "red",
      }}
    >
      {title} <br />
      <span style={{ fontSize: "14px", color: "black" }}>{slogon}</span>
    </div>
  );
};

export default Header;
