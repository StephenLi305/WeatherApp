import React from 'react';


const Weather = props => {
    return(
        <div className="weather__info">
            {
                props.city && props.country && <p className="weather__key">Location:
                    <span className="weather__value"> {props.city}, {props.country}</span>
                </p>
            }

            {
                props.farenheit && <p className="weather__key">Farenheit: 
                    <span className="weather__value"> {props.farenheit}°F</span>
                </p>
            }

            {
                props.humidity && <p className="weather__key">Humidity: 
                    <span className="weather__value"> {props.humidity}% </span>
                </p>
            }

            {
                props.description && <p className="weather__key">Description: 
                    <span className="weather__value"> {props.description}</span>
                </p>
            }
            
            {
                props.error && <p className="weather__key">Error: 
                    <span className="weather__value"> {props.error}</span>
                </p>
            }
        </div>
    )
}
export default Weather;

