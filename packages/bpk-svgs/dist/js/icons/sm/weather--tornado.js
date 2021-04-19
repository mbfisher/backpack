import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M1.5 1.5a1.5 1.5 0 0 0 0 3h21a1.5 1.5 0 0 0 0-3zm3 4.5a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3zM6 12a1.5 1.5 0 0 1 1.5-1.5H21a1.5 1.5 0 0 1 0 3H7.5A1.5 1.5 0 0 1 6 12zm4.5 3a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3zM9 21a1.5 1.5 0 0 1 1.5-1.5H15a1.5 1.5 0 0 1 0 3h-4.5A1.5 1.5 0 0 1 9 21z" /></svg>);