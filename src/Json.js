import React, { Component } from 'react';

class Json extends Component {
    constructor(props)
    {
        super(props)
        this.state={data:props.location.state}
    }

    render() { 
        return ( <div>
            <h2>
                Json
            </h2>

            {Json.stringify(this.state.data)}
        </div> );
    }
}
 
export default Json;