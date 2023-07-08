import "./Banner.css"
import React, { Component } from 'react'

class Banner extends Component {
    render(){
        return (
            <div className="Banner">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
                
            </div>
            )
        
    }
}

export default Banner
