import React from 'react';


const Weather = props => {
    return(
        <div>
            {props.farenheit && <p>Farenheit: {props.farenheit}°F</p>}
        </div>
    )
}
export default Weather;

