// LeftNav.js
import React from "react";
import { ReactComponent as LeftArrowIcon } from "../../assets/left.svg"; // your exported SVG

export default function LeftNav({ onClick }) {
  return (
    <button style={{ backgroundColor: "transparent", border: "none" }} className="navButton leftNav" onClick={onClick}>
      <LeftArrowIcon />
    </button>
  );
}
