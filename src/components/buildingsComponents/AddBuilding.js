import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Inputs from "./Inputs";
import "./AddBuilding.scss";

function AddBuilding({ isActive, setIsActive }) {

  const [category, buildingCategory] = useState("");
  const [ownerName, buildingOwnerName] = useState("");
  const [ownerCode, buildingOwnerCode] = useState("");
  const [guarantorName, ownerGuarantorName] = useState("");
  const [guarantorCode, ownerGuarantorCode] = useState("");
  const [floor, buildingFloor ] = useState("");
  const [room, roomNumber ] = useState("");
  const [area, buildingArea ] = useState("");

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
    <div
      className={isActive ? "add-building-wrapper overlay" : "section-disabled"}
    >
      <div
        ref={Ref}
        className={
          isActive ? "add-building opened-section" : "section-disabled"
        }
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
        <div className="main-section">
          <Button title="Satılıb" />
          <Button title="Kredit" />
          <Button title="İpoteka" />
        </div>
        <form>
          <div className="person-info">
            <h4>Mənzil sahibi</h4>
            <Inputs />
          </div>
          <div className="person-info">
            <h4>Zamin</h4>
            <Inputs />
          </div>
          <div className="person-info">
            <h4>Mənzil</h4>
            <div className="inputs">
              <select>
                <option>Mərtəbə</option>
              </select>
              <select>
                <option>Otaq</option>
              </select>
              <select>
                <option>Sahə</option>
              </select>
            </div>
          </div>
          <div className="person-info">
            <h4>Məbləğ</h4>
            <div className="inputs">
              <input placeholder="İlkin ödəniş"/>
              <input placeholder="İllik faiz"/>
              <input placeholder="Müddət"/>
            </div>
          </div>
          <button className="form-submit-btn" type="submit">
            Tamamla
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddBuilding;
