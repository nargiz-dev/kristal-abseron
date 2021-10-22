import React from 'react';

import 'styles/Button.scss';

function Button({title}) {
    return (
        <div className="button">
            <button>{title}</button>
        </div>
    )
}

export default Button
