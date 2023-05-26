import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './BrimAscent.css'

function BrimAscent(props) {
    const [isToggled, setIsToggled] = useState(false)

  return (
    <Container>
        <div className="container">
            <img className='map-image' src = './images/maps/ascent.webp' alt='ascent minimap'/>
            <div>
            <button onClick={ () => setIsToggled(!isToggled)} className='button'>
                <img className='spike-image' src = './images/abilities/spike.webp' alt='spike icon'/>
                {isToggled && <ShowInfo/>}
            </button>
            </div>
        </div>
    </Container>
  )
}

function ShowInfo () {
    return(
        <div className='lineup-info'>
             <div class="video-wrap">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
        </div>
    )
}


export default BrimAscent