import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AgentForMap from '../lineupdata/AgentForMap'
import '../maps/MapInfo.css'

function PearlInfo(props) {
  const {agent} = props

    const [isToggled, setIsToggled] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageClick = (imageId) => {
        console.log('Image clicked:', imageId);
        // Perform actions based on the clicked image
        setSelectedImage(imageId)
    };

  return (
    <Container>
            <div className="container">
                <img className='map-image' src = './images/maps/pearl.webp' alt='pearl minimap'/>
                    {/*A Default */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '850px', top: '325px'}}
                        onClick={() => {handleImageClick('pearl-a-default')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/*A Cubby */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '910px', top: '345px'}}
                        onClick={() => {handleImageClick('pearl-a-cubby')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    
                    {/* B Safe */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '130px', top: '340px'}}
                        onClick={() => {handleImageClick('pearl-b-safe')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B Quick */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '140px', top: '445px'}}
                        onClick={() => {handleImageClick('pearl-b-quick')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    <AgentForMap agent={agent} selectedImage={selectedImage}/>
            </div>
        </Container>
  )
}

export default PearlInfo