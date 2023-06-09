import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../maps/MapInfo.css'

import AgentForMap from '../lineupdata/AgentForMap'

function FractureInfo(props) {
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
                <img className='map-image' src = './images/maps/fracture.webp' alt='fracture minimap'/>
                    {/*A Default */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '870px', top: '515px'}}
                        onClick={() => {handleImageClick('fracture-a-safe')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {/*A Triple */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '830px', top: '435px'}}
                        onClick={() => {handleImageClick('fracture-a-amain')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B Left Box */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '55px', top: '565px'}}
                        onClick={() => {handleImageClick('fracture-b-safe')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B Right Box */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '120px', top: '500px'}}
                        onClick={() => {handleImageClick('fracture-b-box')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    <AgentForMap agent={agent} selectedImage={selectedImage}/>
            </div>
        </Container>
  )
}

export default FractureInfo