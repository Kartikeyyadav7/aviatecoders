import React ,{useContext , useState} from 'react'
import { useSpring , animated  } from "react-spring";
import useSound from "use-sound";
import Volumes from "../public/audio/pop.mp3"



export default function Volume(){

const [playbackRate, setPlaybackRate] = React.useState(0.95);

  const [play] = useSound(Volumes, {
    playbackRate,
    interrupt: true,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

 const properties = {
  Sun: {
   

    cx: 12,
    cy: 4,
    opacity: 0
  },
  Moon: {
   
    
    cx: 30,
    cy: 0,
    opacity: 1
  }
};

const [isVolume, setVolume] = React.useState(false);

  const toggleVolume = () => {
    setVolume(previous => !previous);
   //  setTheme(theme === 'dark' ? 'light' : 'dark');
  };

const { r, transform, cx, cy, opacity } = properties[
  isVolume ? "Sun" : "Moon"
];

const svgContainerProps = useSpring({ transform });
const centerCircleProps = useSpring({ r });

const maskedCircleProps = useSpring({ cx, cy });
const linesProps = useSpring({ opacity });



return(
<div

>

{isVolume ? 

(<animated.svg xmlns="http://www.w3.org/2000/svg" 
width="24" height="24" 
viewBox="0 0 24 24" fill="none" stroke="currentColor" 
stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
class="feather feather-volume-2"
onClick={function(event){ toggleVolume(); handleClick()}}
      style={{
        cursor: "pointer",
        ...svgContainerProps
      }}
>


<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>

<animated.path style={centerCircleProps} d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07">
</animated.path>

</animated.svg>) : (


    <animated.svg xmlns="http://www.w3.org/2000/svg" 
width="24" height="24" 
viewBox="0 0 24 24" fill="none" stroke="currentColor" 
stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
class="feather feather-volume-2"
onClick={function(event){ toggleVolume(); handleClick()}}
      style={{
        cursor: "pointer",
        ...svgContainerProps
      }}
>


<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>


</animated.svg>
 )}
    




</div>






);



}




