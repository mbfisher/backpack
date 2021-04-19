import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zM16.5 12a1.5 1.5 0 0 1-1.5 1.5h-4.5v3a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 3 0v3h3v-3a1.5 1.5 0 0 1 3 0z" /></svg>);