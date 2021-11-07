import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Inputs from "./Inputs";
import axios from "axios";
import "./AddBuilding.scss";

function AddBuilding({ isActive, setIsActive }) {

  const [category, buildingCategory] = useState("");
  const [ownerName, buildingOwnerName] = useState("");
  const [ownerCode, buildingOwnerCode] = useState("");
  const [guarantorName, buildingGuarantorName] = useState("");
  const [guarantorCode, buildingGuarantorCode] = useState("");
  const [floor, buildingFloor] = useState("");
  const [room, roomNumber] = useState("");
  const [area, buildingArea] = useState("");
 
  const save = () => {
    let building = {
      category: category,
      sahesi:area,
      qiymeti: "80.000 AZN",
      status: "Gecikir",
      otaqsayi: room,
      mertebe: floor,
      zamin: guarantorName,
      mənzilSahibi:ownerName,
    };

    //*Post method to add new customer
    const url = "http://localhost:8080/buildings";
    axios.post(url, building).then((res) => console.log(res));
    buildingCategory("");
    buildingOwnerName("");
    buildingOwnerCode("");
    buildingGuarantorName("");
    buildingGuarantorCode("");
    buildingFloor("");
    roomNumber("");
    buildingArea("");
  };

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
          <Button title="Satılıb" onClick={() => buildingCategory("satilib")} />
          <Button title="Kredit" onClick={() => buildingCategory("kredit")} />
          <Button title="İpoteka" onClick={() => buildingCategory("ipoteka")}/>
        </div>
        <form>
          <div className="person-info">
            <h4>Mənzil sahibi</h4>
            <div>
              <form className="form">
                <input
                  className="name-input"
                  type="text"
                  placeholder="Ad, Soyad, Ata adı"
                  value={ownerName}
                  onChange={(obj) => buildingOwnerName(obj.target.value)}
                />
                <fieldset>
                  <legend>FIN kod</legend>
                  <input
                    type="text"
                    value={ownerCode}
                    onChange={(obj) => buildingOwnerCode(obj.target.value)}
                  />
                </fieldset>
              </form>
            </div>
          </div>
          <div className="person-info">
            <h4>Zamin</h4>
            <div>
              <form className="form">
                <input
                  className="name-input"
                  type="text"
                  placeholder="Ad, Soyad, Ata adı"
                  value={guarantorName}
                  onChange={(obj) => buildingGuarantorName(obj.target.value)}
                />
                <fieldset>
                  <legend>FIN kod</legend>
                  <input
                    type="text"
                    value={guarantorCode}
                    onChange={(obj) => buildingGuarantorCode(obj.target.value)}
                  />
                </fieldset>
              </form>
            </div>
          </div>
          <div className="person-info">
            <h4>Mənzil</h4>
            <div className="inputs">
              <select
                value={floor}
                onChange={(obj) => buildingFloor(obj.target.value)}
              >
                <option>Mərtəbə</option>
                 <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                  <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                  <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>10</option>
              </select>
              <select
                value={room}
                onChange={(obj) => roomNumber(obj.target.value)}
              >
                <option>Otaq</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <select
                value={area}
                onChange={(obj) => buildingArea(obj.target.value)}
              >
                <option>Sahə</option>
                <option>100</option>
                <option>150</option>
                <option>200</option>
                <option>300</option>
              </select>
            </div>
          </div>
          <div className="person-info">
            <h4>Məbləğ</h4>
            <div className="inputs">
              <input placeholder="İlkin ödəniş" />
              <input placeholder="İllik faiz" />
              <input placeholder="Müddət" />
            </div>
          </div>
          <button className="form-submit-btn" type="submit" onClick={save}>
            Tamamla
          </button>
        </form>
      </div>
    </div>
  );
}
export default AddBuilding;
