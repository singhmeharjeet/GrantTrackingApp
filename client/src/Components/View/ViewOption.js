import React from "react";
import "./ViewOption.css";
import ViewContainer from "./ViewContainer";
function ViewOption() {
  return (
    <div className="viewoption">
      <label>Please enter the project number (6-7 Digits) :</label>
      <input placeholder="Project"></input>
      <button onClick={() => <ViewContainer />}>GO</button>
      {/* <ViewContainer /> */}
    </div>
  );
}

export default ViewOption;
