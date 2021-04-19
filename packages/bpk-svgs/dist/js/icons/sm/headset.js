import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 3.75a7.5 7.5 0 0 0-7.5 7.5H6a1.5 1.5 0 0 1 1.5 1.5v4.5a1.5 1.5 0 0 1-1.5 1.5H4.5a3 3 0 0 1-3-3v-4.5a10.5 10.5 0 0 1 21 0v7.5a4.5 4.5 0 0 1-4.5 4.5h-5.25a1.5 1.5 0 0 1 0-3H18a1.5 1.5 0 0 0 1.5-1.5H18a1.5 1.5 0 0 1-1.5-1.5v-4.5a1.5 1.5 0 0 1 1.5-1.5h1.5a7.5 7.5 0 0 0-7.5-7.5z" /></svg>);