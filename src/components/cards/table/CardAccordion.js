import React from "react";
import "./CardAccordion.scss";
import CardAccordionCredit from "./CardAccordionCredit";
import CardAccordionEmpty from "./CardAccordionEmpty";
import CardAccordionSold from "./CardAccordionSold";

function CardAccordion({ isOpen, whichOpen, which, index, key, building }) {
  return (
    <div
      className={isOpen   ? "card-accordion active-accordion" : "card-accordion"}
      style={{height: building.kateqoriya === "satilib" ? "90px" : "", transform : building.kateqoriya==="satilib" ? "translateY(-90px)" : "translateY(-249px)"}}
    >
      <div className="card-accordion-wrapper">
        {building.kateqoriya === "kredit" || building.kateqoriya==="ipoteka" ? (
          <CardAccordionCredit building={building} />
        ) : (
          " "
        )}
         {building.kateqoriya === "satilib" ? (
          <CardAccordionSold building={building}/>
        ) : (
          " "
        )}
          {building.kateqoriya === "boş" ? (
          <CardAccordionEmpty building={building}/>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default CardAccordion;
