import React from 'react'

function Inputs() {
    return (
        <div>
            <form className="form"> 
                <input className="name-input" type="text" placeholder="Ad, Soyad, Ata adı"/>
                <fieldset>
                    <legend>
                        FIN kod
                    </legend>
                    <input type="text"></input>
                </fieldset>
            </form>
        </div>
    )
}

export default Inputs
