import React from 'react';


class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..." value="San Francisco"></input>
                <input type="text" name="country" placeholder="Country..." value="US"></input>
                <button>Get Weater</button>
            </form>
                
            
        )
    }


}

export default Form;

