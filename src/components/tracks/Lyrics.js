import React, { Component } from 'react'
import axios from 'axios'

export class Lyrics extends Component {

    state = {
        track:{},
        lyrics:{},
        track_string: {}
    }

    componentDidMount(){
         axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({track_string: res.data.message.body.lyrics})
                
            })
    }


    render() {
        console.log(this.state.track_string)
        return (
            <div>
                <h1 className="text-center">Lyrics:</h1>
                <br />
                <p>{this.state.track_string.lyrics_body}</p>
            </div>
        )
    }
}

export default Lyrics