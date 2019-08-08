import React, { Component } from 'react'
import { Consumer } from '../../context'
import SpinWheel from '../layout/SpinWheel';
import Track from '../tracks/Track.js'


class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    
                    console.log(value.track_list)
                    if(value.track_list == null || value.track_list.length == 0){
                        return <SpinWheel />
                    }else {
                        return (
                            <>
                            <h3 className="text-center mb-4" >{value.heading}</h3>
                            <div className = 'row'>
                                {value.track_list.map((item) => {
                                   return <Track key ={item.track.track_id} track = {item.track}/>
                                })}
                            </div>
                            </>
                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Tracks;