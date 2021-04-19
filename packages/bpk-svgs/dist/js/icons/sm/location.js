import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M13.5 16.963a.806.806 0 0 1 .595-.76 7.5 7.5 0 1 0-4.19 0 .806.806 0 0 1 .595.76V21a1.5 1.5 0 0 0 3 0z" /></svg>);