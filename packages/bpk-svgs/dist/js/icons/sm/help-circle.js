import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM12 18a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 18zm.75-4.5H12a1.5 1.5 0 0 1 0-3h.75a.75.75 0 0 0 0-1.5H10.5a1.5 1.5 0 0 1 0-3h2.25a3.75 3.75 0 0 1 0 7.5z" /></svg>);