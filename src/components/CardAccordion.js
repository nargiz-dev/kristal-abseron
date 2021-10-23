import React from 'react';
import 'styles/CardAccordion.scss';

function CardAccordion({isOpen, whichOpen, setWhichOpen, which, index, key}) {
    return (
        <div className={isOpen ? "card-accordion active-accordion" :"card-accordion"}>  
        <div className="card-accordion-wrapper">
            123
        </div>
        </div>
    )
}

export default CardAccordion;
