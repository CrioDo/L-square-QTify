import React from "react";
import { ReactComponent as RightArrowIcon } from "../../assets/right.svg"; // your exported SVG

export default function RightNav({ onClick }) {
  return (
    <button style={{ backgroundColor: "transparent", border: "none" }}  className="navButton rightNav" onClick={onClick}>
      <RightArrowIcon />
    </button>
  );
}
