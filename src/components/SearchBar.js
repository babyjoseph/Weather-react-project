import React, { useEffect, useRef } from "react";
import { Bar } from "../styles";

export default function SearchBar({ searchQueue, handleChange, keyPressed }) {
  //Will focus on the input bar on start
  const inputBar = useRef(null);
  useEffect(() => {
    inputBar.current.focus();
  }, []);

  return (
    <Bar
      placeholder="Search"
      onChange={handleChange}
      ref={inputBar}
      type="text"
      value={searchQueue}
      onKeyPress={keyPressed}
    ></Bar>
  );
}
