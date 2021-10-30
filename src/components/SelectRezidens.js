import React from "react";
import 'styles/SelectRezidens.scss';

function SelectRezidens() {
  return (
    <div>
      <div className="select">
        <select className="select-input">
          <option value="1">İnqilab Rezidens</option>
          <option value="2">Neftçilər Rezidens</option>
          <option value="3">Xırdalan Rezidens</option>
        </select>
      </div>
    </div>
  );
}

export default SelectRezidens;
