import React, { useEffect, useRef } from "react";
import "styles/AddBuilding.scss";

function AddBuilding({ isActive, setIsActive }) {
  const Ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isActive && Ref.current && !Ref.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isActive]);
  return (
    <div className={isActive ? "add-building-wrapper overlay" : "disabled"}>
      <div
        ref={Ref}
        className={isActive ? "add-building opened-section" : "disabled"}
      >
        <div className="add-building-header">
          <h2>Yeni mənzil əlavə et</h2>
          <button
            className="close-button"
            onClick={() => setIsActive(!isActive)}
          >
            Bağla
          </button>
        </div>
        <div className="main-section"></div>
      </div>
    </div>
  );
}
export default AddBuilding;
