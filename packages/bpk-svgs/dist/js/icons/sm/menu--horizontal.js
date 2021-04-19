import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M6 12a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm9 0a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm6 3a3 3 0 1 0-3-3 3 3 0 0 0 3 3z" /></svg>);