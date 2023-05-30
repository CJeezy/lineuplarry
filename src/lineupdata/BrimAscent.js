import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './BrimAscent.css'

function BrimAscent({lineup}) {    
    const [isToggled, setIsToggled] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleImageClick = (imageId) => {
        console.log('Image clicked:', imageId);
        // Perform actions based on the clicked image
        setSelectedImage(imageId)
    };

    const renderBasedOnImage = () => {
        if(selectedImage === 'gen-plant'){
            return (<>
                <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                    id={'1'}
                    style={{ left: '545px', top: '275px' }}>
                </img>
                <ShowInfo selectedImage={selectedImage}/></>)
        }
        else if(selectedImage === 'dice-plant'){
            return (<>
                <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                    id={'1'}
                    style={{ left: '545px', top: '275px' }}>
                </img>
                <ShowInfo selectedImage={selectedImage}/></>)
        }
        else if(selectedImage === 'bdefault-plant'){
            return (<>
                <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                    id={'1'}
                    style={{ left: '455px', top: '725px' }}>
                </img>
                <ShowInfo selectedImage={selectedImage}/></>)
        }
        else if(selectedImage === 'bcorner-plant'){
            return (<>
                <img className='agent-image' src='./images/agents/brimstone.webp' alt='brimstone'
                    id={'1'}
                    style={{ left: '375px', top: '745px' }}>
                </img>
                <ShowInfo selectedImage={selectedImage}/></>)
        }   
    }

    return (
        <Container>
            <div className="container">
                <img className='map-image' src = './images/maps/ascent.webp' alt='ascent minimap'/>
                    {/*A GENERATOR */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '330px', top: '175px'}}
                        onClick={() => {handleImageClick('gen-plant')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {/*A DICE */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '315px', top: '115px'}}
                        onClick={() => {handleImageClick('dice-plant')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B DEFAULT */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '270px', top: '795px'}}
                        onClick={() => {handleImageClick('bdefault-plant')
                                        setIsToggled(!isToggled)}}>
                    </img>

                    {/* B CORNER */}
                    <img className='spike-image' src='./images/abilities/spike.webp' alt='spike' 
                        id={'1'}
                        style={{left: '310px', top: '830px'}}
                        onClick={() => {handleImageClick('bcorner-plant')
                                        setIsToggled(!isToggled)}}>
                    </img>
                    {renderBasedOnImage()}
            </div>
        </Container>
  )
}

function ShowInfo (props) {
    const {selectedImage} = props
    console.log(selectedImage)

    if(selectedImage === 'gen-plant'){
        return(
            <div className='lineup-info'>
                LINEUP INFORMATION FOR DEFAULT GEN PLANT
                <div class="video-wrap">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=4" title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            )
        }
    else if(selectedImage === 'dice-plant'){
        return(
            <div className='lineup-info'>
                LINEUP INFORMATION FOR DICE
                <div class="video-wrap">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=26" title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
    else if(selectedImage === 'bdefault-plant'){
        return(
            <div className='lineup-info'>
                LINEUP INFORMATION FOR B DEFAULT
                <div class="video-wrap">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=116" title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
    else if(selectedImage === 'bcorner-plant'){
        return(
            <div className='lineup-info'>
                LINEUP INFORMATION FOR B CORNER
                <div class="video-wrap">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YD0L3nbWrh4?start=152" title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        )
    }


}



export default BrimAscent