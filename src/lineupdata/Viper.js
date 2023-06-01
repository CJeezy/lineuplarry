import React from 'react'

function Viper(props) {
const {selectedImage} = props
    // eslint-disable-next-line default-case
   switch(selectedImage){

   //----------------------------------------ASCENT-------------------------------------------
   case 'ascent-a-gen' :
       return(
           <div>
               <img className='agent-image' src='./images/agents/viper.webp' alt='viper'
                   style={{ left: '545px', top: '275px' }}></img>
               <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/9egY95LBTMc?start=65"  title="YouTube video player" 
                   allow="accelerometer;" allowfullscreen></iframe>
               <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
           </div>
           );

   case 'ascent-a-dice' :
       return(
           <div>
               <img className='agent-image' src='./images/agents/viper.webp' alt='viper'
                   style={{ left: '545px', top: '275px' }}></img>
               <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/9egY95LBTMc?start=93"  title="YouTube video player" 
                   allow="accelerometer;" allowfullscreen></iframe>
               <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
           </div>
           );
   case 'ascent-b-default' :
       return(
           <div>
               <img className='agent-image' src='./images/agents/viper.webp' alt='viper'
                   style={{ left: '565px', top: '755px' }}></img>
               <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/9egY95LBTMc?start=5"  title="YouTube video player" 
                   allow="accelerometer;" allowfullscreen></iframe>
               <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
           </div>
           );
   case 'ascent-b-corner' :
       return(
           <div>
               <img className='agent-image' src='./images/agents/viper.webp' alt='viper'
                   style={{ left: '515px', top: '755px' }}></img>
               <iframe className='video-frame' width="560" height="315" src="https://www.youtube.com/embed/LSml72zT_5A?start=40" title="YouTube video player" 
                   allow="accelerometer;" allowfullscreen></iframe>
               <img className='picture-frame' src='./images/screenshots/killjoy/original.png' alt='PLACEHOLDER'></img>
           </div>
           );
 }
}

export default Viper