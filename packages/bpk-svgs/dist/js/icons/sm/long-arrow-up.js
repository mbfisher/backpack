import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 21a1.5 1.5 0 0 1-1.5-1.5V8.121l-4.94 4.94a1.5 1.5 0 0 1-2.12-2.122l7.5-7.5a1.5 1.5 0 0 1 2.12 0l7.5 7.5a1.5 1.5 0 0 1-2.12 2.122L13.5 8.12V19.5A1.5 1.5 0 0 1 12 21z" clipRule="evenodd" /></svg>);