import React from "react"
import livemusic from '../images/livemusic.png'
import dj from '../images/dj.png'
import videogame from '../images/videogame.png'
import anime from '../images/cowboybebop.jpg'

const Interests = () => {

    return (
        <div>
            <div className='interests-container'>
                <h4>Live Music</h4>
                <img className='live-music' src={livemusic} />
                <h4>Djing</h4>
                <img className='djing' src={dj} />
                <h4>Video Games</h4>
                <img className='video-games' src={videogame} />
                <h4>Anime</h4>
                <img className='anime' src={anime} />
            </div>
        </div>
    )
}

export default Interests;