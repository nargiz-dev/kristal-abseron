import React from 'react';
import {projectsCard}  from 'data/data';

import 'styles/ProjectsBanksCard.scss'

function ProjectsCard() {
    return (
        <div className="statistics-card">
            <h4>Ən çox satış edilən layihələr</h4>
            <div className="listed-items">
            <ul>
            {projectsCard.map((item, index) =>{
                return(
                    <li className="listed-item" key={index} >
                        <div className="listed-item-info">
                        <img src={item.icon} alt="building-icon"/>
                        <div className="item-text">
                        <p>{item.title}</p>
                        <small>{item.text}</small>
                        </div></div>
                        <p className='item-value'>{item.value}</p>
                    </li>
                
                );
            },
          
             )}
        
           </ul>
           </div> 
        </div>
    )
}





export default ProjectsCard;
