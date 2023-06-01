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
                <img className='map-image' src = './images/maps/pearl.webp' alt='bind minimap'/>
                    {/*A Truck */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '680px', top: '335px'}}
                        onClick={() => {handleImageClick('bind-a-truck')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {/*A Triple */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '740px', top: '325px'}}
                        onClick={() => {handleImageClick('bind-a-triple')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B Left Box */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '250px', top: '285px'}}
                        onClick={() => {handleImageClick('bind-b-left')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B Right Box */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '300px', top: '285px'}}
                        onClick={() => {handleImageClick('bind-c-right')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    <AgentForMap agent={agent} selectedImage={selectedImage}/>
            </div>
        </Container>
  )
}

export default PearlInfo