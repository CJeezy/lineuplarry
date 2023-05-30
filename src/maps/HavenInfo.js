import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Brimstone from '../lineupdata/Brimstone'

import '../maps/MapInfo.css'


function HavenInfo(props) {
    const {agent} = props

    const [isToggled, setIsToggled] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageClick = (imageId) => {
        console.log('Image clicked:', imageId);
        // Perform actions based on the clicked image
        setSelectedImage(imageId)
    };

    const renderBasedOnImage = () => {
        if(agent === 'brimstone'){
            return(<div><Brimstone selectedImage={selectedImage}/></div>)
        }
    }


  return (
    <Container>
            <div className="container">
                <img className='map-image' src = './images/maps/haven.webp' alt='haven minimap'/>
                    {/*A Default */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '390px', top: '155px'}}
                        onClick={() => {handleImageClick('haven-a-default')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {/*A Corner */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '320px', top: '90px'}}
                        onClick={() => {handleImageClick('haven-a-corner')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B DEFAULT */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '420px', top: '485px'}}
                        onClick={() => {handleImageClick('haven-b-default')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* C DEFAULT */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '400px', top: '780px'}}
                        onClick={() => {handleImageClick('haven-c-default')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* C Long */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '310px', top: '850px'}}
                        onClick={() => {handleImageClick('haven-c-corner')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {renderBasedOnImage()}
            </div>
        </Container>
  )
}

export default HavenInfo