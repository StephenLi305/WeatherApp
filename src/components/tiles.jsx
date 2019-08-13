import React from 'react';
// import { ReactComponent } from '*.svg';


class Tiles extends React.Component {
    render(){
        return(
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <p className="title-container__subtitle">Enter a city and find out the temperature and more...</p>
            </div> 
        )
    }
}

export default Tiles;