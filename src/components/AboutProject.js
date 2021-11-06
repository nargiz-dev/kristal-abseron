import React, { useRef, useEffect } from "react";
import building from "images/building.png";
import img1 from "images/1otaq.png";
import img2 from "images/2otaq.png";
import img3 from "images/2otaq54.png";
import img4 from "images/3otaq.png";
import img5 from "images/3otaq86.png";
import img6 from "images/4otaq.png";

import "styles/AboutProject.scss";

function AboutProject({ open, setOpen }) {
  const myRef = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && myRef.current && !myRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);
  return (
    <div className={open ? "about-project-wrapper overlay" : "disabled"}>
      <div ref={myRef} className={open ? "about-project opened-section" : "disabled"}>
        <div className="about-project-header">
          <h2>Layihə haqqında</h2>
          <button className="close-button" onClick={() => setOpen(!open)}>
            Bağla
          </button>
        </div>
        <div className="main-section">
          <div className="about-project-text">
            <h4>İnqilab Rezidens</h4>
            <p>
              İnqilab Residence layihəsi Bakı şəhərinin ən prestijli
              küçələrindən hesab edilən Həsən Əliyev küçəsində yerləşir. Müasir
              görkəmli, özəl bir binadır. İnqilab Residence layihəsində tam
              təmirli mənzilləri 20 illik ipoteka ilə əldə etmək mümkündür.
            </p>
            <p>
              İnqilab Residence layihəsinin qonşuluğunda Azərtürkbankın baş
              ofisi, TQDK, Tibb Universiteti, bir çox uşaq bağçaları və orta
              məktəblər yerləşir.
            </p>
            <div className="about-buildings">
              <h4>Mənzillər</h4>
              <div className="buildings-info">
                <div className="info-pictures">
                  <img src={img6} alt="buildings-info"/>
                  <img src={img5} alt="buildings-info"/>
                  <img src={img4} alt="buildings-info"/>
                  <img src={img3} alt="buildings-info"/>
                </div>
                <div className="info-pictures">
                  <img src={img2} alt="buildings-info"/>
                  <img src={img1} alt="buildings-info"/>
                </div>
              </div>
            </div>
            <p className="last-text">
              2020-ci ildə tikintisi başlayıb və davam etməkdədir
            </p>
          </div>
          <div className="about-project-image">
            <img className="main-image" src={building} alt="building" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
