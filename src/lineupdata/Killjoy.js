import React from 'react'
import './ContentPage.css'

function Killjoy(props) {
  const {selectedImage} = props

  // eslint-disable-next-line default-case
  switch(selectedImage){
    case 'ascent-a-gen' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/killjoy.webp' alt='brimstone'
                    style={{ left: '545px', top: '275px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/cgky_T4AvuY?start=17" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );

    case 'ascent-a-dice' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/killjoy.webp' alt='brimstone'
                    style={{ left: '545px', top: '275px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/EzXpAu1PfBk?start=210" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
    case 'ascent-b-default' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/killjoy.webp' alt='brimstone'
                    style={{ left: '515px', top: '755px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/cgky_T4AvuY?start=133"  title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
    case 'ascent-b-corner' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/killjoy.webp' alt='brimstone'
                    style={{ left: '515px', top: '755px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/EzXpAu1PfBk?start=401"   title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
  }
}

export default Killjoy