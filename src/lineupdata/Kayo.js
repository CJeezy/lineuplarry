import React from 'react'
import './ContentPage.css'


function Kayo(props) {
    const {selectedImage} = props

    // eslint-disable-next-line default-case
  switch(selectedImage){

    //----------------------------------------ASCENT-------------------------------------------
    case 'ascent-a-gen' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/kayo.webp' alt='brimstone'
                    style={{ left: '545px', top: '275px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/z7HuQBXND5c?start=99" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );

    case 'ascent-a-dice' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/kayo.webp' alt='brimstone'
                    style={{ left: '545px', top: '275px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/z7HuQBXND5c?start=113" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
    case 'ascent-b-default' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/kayo.webp' alt='brimstone'
                    style={{ left: '565px', top: '755px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/z7HuQBXND5c?start=172" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
    case 'ascent-b-corner' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/kayo.webp' alt='brimstone'
                    style={{ left: '515px', top: '755px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/NlOM7SqpX4g?start=350" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
  }
  
}

export default Kayo