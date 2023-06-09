import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AgentForMap from '../lineupdata/AgentForMap'
import '../maps/MapInfo.css'

function LotusInfo(props) {
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
                <img className='map-image' src = './images/maps/lotus.webp' alt='bind minimap'/>
                    {/*A Default */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '855px', top: '360px'}}
                        onClick={() => {handleImageClick('lotus-a-default')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {/*A Hut */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '840px', top: '325px'}}
                        onClick={() => {handleImageClick('lotus-a-corner')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B DEFAULT */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '410px', top: '425px'}}
                        onClick={() => {handleImageClick('lotus-b-default')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* C Mound */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '140px', top: '485px'}}
                        onClick={() => {handleImageClick('lotus-c-mound')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* C Safe */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '140px', top: '430px'}}
                        onClick={() => {handleImageClick('lotus-c-safe')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    <AgentForMap agent={agent} selectedImage={selectedImage}/>
            </div>
        </Container>
  )
}

export default LotusInfo