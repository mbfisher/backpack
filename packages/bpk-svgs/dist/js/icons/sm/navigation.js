import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="8" height="8" style={{
  width: ".5rem",
  height: ".5rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.53 10.53 0 0 0 12 1.5zm4.475 6.63l-1.785 5.352a1.91 1.91 0 0 1-1.208 1.209L8.13 16.474a.478.478 0 0 1-.605-.605l1.784-5.352a1.91 1.91 0 0 1 1.209-1.208v.001l5.352-1.785a.478.478 0 0 1 .605.605zM13.5 12a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z" /></svg>);