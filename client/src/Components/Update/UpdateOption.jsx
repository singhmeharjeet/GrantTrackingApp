import React from "react";

import { useGlobalData } from "../../Contexts/Global/GlobalContext";

function UpdateOption() {
  const { updateRequest } = useGlobalData();

  updateRequest();
  return (
    <div className="updateoption">
      <h1>Update</h1>
    </div>
  );
}

export default UpdateOption;
