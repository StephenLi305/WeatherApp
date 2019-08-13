import React from 'react';


const Weather = props => {
    return(
        <div className="weather__info">
            {
                props.city && props.country && <p className="weather__key">Location: 
                    <span>{props.city}, {props.country}</span>
                </p>
            }

            {
                props.farenheit && <p>Farenheit: 
                    <span>
                        {props.farenheit}°F
                    </span>
                </p>
            }
            {props.humidity && <p>Humidity: {props.humidity}%</p>}
            {props.description && <p>Description: {props.description}</p>}
            {props.error && <p>Error: {props.error}</p>}
        </div>
    )
}
export default Weather;

