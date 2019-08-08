import React, { Component } from 'react'
import spinner from './spin.gif'

export class SpinWheel extends Component {
    render() {
        return (
            <>
              <img 
              src = {spinner}
              alt = "Loading..."
              style ={{width: "100px", margin: "auto", display: "block"}} />
            </>
        )
    }
}

export default SpinWheel
