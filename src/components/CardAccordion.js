import React from "react";
import "styles/CardAccordion.scss";
import CardAccordionCredit from "./CardAccordionCredit";
import CardAccordionEmpty from "./CardAccordionEmpty";
import CardAccordionSold from "./CardAccordionSold";

function CardAccordion({ isOpen, whichOpen, which, index, key, building }) {
  return (
    <div
      className={isOpen ? "card-accordion active-accordion" : "card-accordion"}
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
