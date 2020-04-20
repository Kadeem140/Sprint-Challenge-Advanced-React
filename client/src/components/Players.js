import React from 'react';
import axios from 'axios'



export default function Players (props){ 
    console.log('Players', props)
           return(    
                <div>
                    <span>{props.player.name}</span>
    
                </div>
           );
        
    }