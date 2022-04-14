import React from "react";

 const buttonStyles = {
    padding: "15px 40px",
    color: "#9966FF",
    backgroundColor: "white",
    borderRadius: 50,
    fontSize: 26,
    letterSpacing: -0.75,
    lineHeight: 1.5,
    fontWeight: 700,
    fontStyle: "normal",
    width: "max-content",
    flexShrink: 0,
    border: "2px solid #9966FF",
  };
const Btn = ({ style, text = "Default text" }) => {

  return (
    <div style={style}>
      <div style={buttonStyles}>{text}</div>
    </div>
  );
};

export default Btn;
