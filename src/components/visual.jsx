import React from 'react';

import ClearSkies from '../images/ClearSkies.jpg'
import FewClouds from '../images/FewClouds.jpg'
import ScatterClouds from '../images/ScatterClouds.jpg'
import BrokenClouds from '../images/brokenClouds.png'
import ShowerRain from '../images/showerRain.jpg'
import Rain from '../images/Rain.gif'
import Thunderstorm from '../images/Thunderstorm.jpg'
import Snow from '../images/Snow.jpg'
import Mist from '../images/Mist.jpg'



const Visual = props => {
    return(
        <div>
            {props.description === "clear sky" ? <img src={ClearSkies} alt="Clear Skies" /> : null}
            {props.description === "few clouds" ? <img src={FewClouds} alt="Few Clouds" /> : null}
            {props.description === "scattered clouds" ? <img src={ScatterClouds} alt="Scatter Clouds" /> : null}
            {props.description === "broken clouds" ? <img src={BrokenClouds} alt="Broken Clouds" /> : null}
            {props.description === "shower rain" ? <img src={ShowerRain} alt="Few Clouds" /> : null}
            {props.description === "rain" ? <img src={Rain} alt="Rain" /> : null}
            {props.description === "thunderstorm" ? <img src={Thunderstorm} alt="Thunderstorm" /> : null}
            {props.description === "snow" ? <img src={Snow} alt="Snow" /> : null}
            {props.description === "mist" ? <img src={Mist} alt="Mist" /> : null}
        </div>
    )
}

export default Visual;

