import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import '../maps/MapInfo.css'

import AgentForMap from '../lineupdata/AgentForMap'

function AscentInfo(props) {
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
                <img className='map-image' src = './images/maps/ascent.webp' alt='ascent minimap'/>
                    {/*A GENERATOR */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '330px', top: '175px'}}
                        onClick={() => {handleImageClick('ascent-a-gen')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {/*A DICE */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '315px', top: '115px'}}
                        onClick={() => {handleImageClick('ascent-a-dice')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B DEFAULT */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '270px', top: '795px'}}
                        onClick={() => {handleImageClick('ascent-b-default')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B CORNER */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '310px', top: '830px'}}
                        onClick={() => {handleImageClick('ascent-b-corner')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    <AgentForMap agent={agent} selectedImage={selectedImage}/>
            </div>
        </Container>
  )
}

export default AscentInfo