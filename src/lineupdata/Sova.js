import React from 'react'

function Sova(props) {
    const {selectedImage} = props
     // eslint-disable-next-line default-case
    switch(selectedImage){

    //----------------------------------------ASCENT-------------------------------------------
    case 'ascent-a-gen' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/sova.webp' alt='brimstone'
                    style={{ left: '545px', top: '275px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/d6hL4AunBZM?start=116" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );

    case 'ascent-a-dice' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/sova.webp' alt='brimstone'
                    style={{ left: '545px', top: '275px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/d6hL4AunBZM?start=139" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
    case 'ascent-b-default' :
        return(
            <div>
                <img className='agent-image' src='./images/agents/sova.webp' alt='brimstone'
                    style={{ left: '565px', top: '755px' }}></img>
                <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/d6hL4AunBZM?start=3" title="YouTube video player" 
                    allow="accelerometer;" allowfullscreen></iframe>
                <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
            </div>
            );
    // case 'ascent-b-corner' :
    //     return(
    //         <div>
    //             <img className='agent-image' src='./images/agents/sova.webp' alt='brimstone'
    //                 style={{ left: '515px', top: '755px' }}></img>
    //             <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/NlOM7SqpX4g?start=350" title="YouTube video player" 
    //                 allow="accelerometer;" allowfullscreen></iframe>
    //             <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
    //         </div>
    //         );
  }
}

export default Sova