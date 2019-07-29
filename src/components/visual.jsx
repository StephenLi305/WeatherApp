import React from 'react';

import clearSkies from '../images/clearskies.jpg'

console.log(clearSkies)
const Visual = props => {
    return(
        <div>
            <p>This is the visual page</p>
            {false ? <img src={clearSkies} alt="Clear Skies" /> : null}
        </div>
    )
}

export default Visual;

