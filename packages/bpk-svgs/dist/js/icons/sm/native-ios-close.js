import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M5.287 5.305a1 1 0 0 1 1.414 0l5.293 5.293 5.293-5.293a1 1 0 0 1 1.438 1.39l-.024.024-5.293 5.293 5.293 5.293a1 1 0 0 1-1.414 1.414l-5.293-5.293L6.7 18.72a1 1 0 0 1-1.414-1.414l5.293-5.293L5.287 6.72a1 1 0 0 1 0-1.414z" /></svg>);