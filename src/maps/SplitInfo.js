import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AgentForMap from '../lineupdata/AgentForMap'
import '../maps/MapInfo.css'

function SplitInfo(props) {
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
                <img className='map-image' src = './images/maps/split.webp' alt='split minimap'/>
                    {/*A Default */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '250px', top: '100px'}}
                        onClick={() => {handleImageClick('split-a-default')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {/*A Corner */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '240px', top: '45px'}}
                        onClick={() => {handleImageClick('split-a-amain')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B Default */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '330px', top: '855px'}}
                        onClick={() => {handleImageClick('split-b-default')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B B-main */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '280px', top: '865px'}}
                        onClick={() => {handleImageClick('split-b-bmain')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    <AgentForMap agent={agent} selectedImage={selectedImage}/>
            </div>
        </Container>
  )
}

export default SplitInfo