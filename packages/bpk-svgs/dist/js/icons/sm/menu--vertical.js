import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 6a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0 9a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm-3 6a3 3 0 1 0 3-3 3 3 0 0 0-3 3z" /></svg>);