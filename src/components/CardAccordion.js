import React from 'react';
import 'styles/CardAccordion.scss';
import CardAccordionCredit from './CardAccordionCredit';

function CardAccordion({isOpen, whichOpen, which, index, key, building}) {
    return (
        <div className={isOpen ? "card-accordion active-accordion" :"card-accordion"}>  
        <div className="card-accordion-wrapper">
            {building.kateqoriya==="kredit" ? <CardAccordionCredit building={building}/> : " "}
            {building.kateqoriya==="ipoteka" ? <p>ipoteka:{building.mənzilSahibi}</p> : " "}
        </div>
        </div>
    )
}

export default CardAccordion;
