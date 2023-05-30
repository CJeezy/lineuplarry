import React from 'react'

function Brimstone(props) {
    const {selectedImage} = props
    console.log(selectedImage)
    
    // eslint-disable-next-line default-case
    switch (selectedImage){
        case 'haven-a-default' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '645px', top: '265px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4fJiPeI8_HU?start=173" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );
        case 'haven-a-corner' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '645px', top: '305px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4fJiPeI8_HU?start=201" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );
        case 'haven-b-default' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '765px', top: '435px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4fJiPeI8_HU?start=124" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );
        case 'haven-c-default' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '725px', top: '865px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4fJiPeI8_HU?start=13" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );
        case 'haven-c-corner' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '725px', top: '865px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4fJiPeI8_HU?start=35" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );

        case 'ascent-a-gen' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '545px', top: '275px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=4" title="YouTube video player" 
                            frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );
        
        case 'ascent-a-dice' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '545px', top: '275px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=27" title="YouTube video player" 
                            frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );

        case 'ascent-b-default' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '455px', top: '725px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=116" title="YouTube video player" 
                            frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );

        case 'ascent-b-corner' :
            return(
                <div className='lineup-info'>
                    <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                        style={{ left: '375px', top: '745px' }}>
                    </img>
                        <div class="video-wrap">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=152" title="YouTube video player" 
                            frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                            picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                </div>
                );
        
    }
}

export default Brimstone