import React from 'react'
import { Link } from 'react-router-dom'



const Track = (props) => {
    const { track } = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-lg">
                <div className="card-body">
                    <h5>{track.artist_name}</h5>
                    <div className="col-xs-1-12">
                        <p className="card-text">
                            <strong><i className="fas fa-play"></i> Track: </strong>{track.track_name}
                            <br />
                            <strong> <i className="fas fa-compact-disc"></i> Album: </strong>{track.album_name}

                        </p>
                        <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block" style={{color:"paleturquoise", margin: 'auto', paddingTop: 20}}>
                            <p style={{fontFamily:'Sans-serif'}}><i className="fas fa-chevron-right"></i><strong><em> View Lyrics</em></strong></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track
