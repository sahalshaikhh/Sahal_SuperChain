import React from "react";

function Button(props) {
  return (
    <button
      className="button px-7 py-3 text-[#fafafa] bg-[#1a1b1f] text-xs font-medium opacity-100"
      style={{
        wordSpacing: "0.1rem",
        letterSpacing: "0.1rem",
        padding: props.padding,
      }}
    >
      GET ACCESS
    </button>
  );
}

export default Button;
