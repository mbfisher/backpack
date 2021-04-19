import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 3a1.5 1.5 0 0 0-1.5 1.5v11.379l-4.94-4.94a1.5 1.5 0 0 0-2.12 2.122l7.5 7.5a1.5 1.5 0 0 0 2.12 0l7.5-7.5a1.5 1.5 0 0 0-2.12-2.122l-4.94 4.94V4.5A1.5 1.5 0 0 0 12 3z" clipRule="evenodd" /></svg>);