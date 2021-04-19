import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M6 1.5A1.5 1.5 0 0 0 4.5 3v18A1.5 1.5 0 0 0 6 22.5h3a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 9 1.5zm9 0A1.5 1.5 0 0 0 13.5 3v18a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 18 1.5z" /></svg>);