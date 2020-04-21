import React from 'react';


export default function PlayersData (props){ 
    // console.log('Players', props)
           return(    
                <div>
                    <h4>{props.player.name}</h4>
                    <span>{props.player.country}</span>
                    <p>{props.player.id}</p>
    
                </div>
           );
        
    }

  