import React, { useEffect, useRef } from "react";
import "styles/AddBuilding.scss";

function AddBuilding({ isOpen, setIsOpen }) {
  const Ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && Ref.current && !Ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);
  return (
    <div className={isOpen ? "add-building-wrapper overlay" : "disabled"}>
      <div
        ref={Ref}
        className={isOpen ? "add-building opened-section" : "disabled"}
      >
        <div className="add-building-header">
          <h2>Yeni mənzil əlavə et</h2>
          <button className="close-button" onClick={() => setIsOpen(!isOpen)}>
            Bağla
          </button>
        </div>
        <div className="main-section"></div>
      </div>
    </div>
  );
}
export default AddBuilding;
