import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M22.854 9.233l-8.087-8.087a3.913 3.913 0 0 0-5.534 0L1.146 9.233a3.913 3.913 0 0 0 0 5.534l8.087 8.087a3.913 3.913 0 0 0 5.534 0l8.087-8.087a3.913 3.913 0 0 0 0-5.534zM13.5 16.5a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 3 0zM12 9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 9z" /></svg>);