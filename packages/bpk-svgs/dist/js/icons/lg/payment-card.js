import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M5 4a3 3 0 0 0-3 3v.5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V7a3 3 0 0 0-3-3zm17 6.5a.5.5 0 0 0-.5-.5h-19a.5.5 0 0 0-.5.5V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3z" /></svg>);