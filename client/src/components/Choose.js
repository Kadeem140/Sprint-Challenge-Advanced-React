import React from 'react';
import { useCounter} from '../hooks/useCounter';
import {useState} from 'react';


export default function Choose (props){

    const [count, setCount] = useCounter(parseInt(props.order));
    // const [result, setResult] = useState(props.player);

    console.log('Choose', props);
    // console.log('Result', props.player);
    
    const handleChange1 = e => {
        e.preventDefault();
        props.setOrder(e.target.value);
        setCount(e.target.value)
    }

    // const handleChange2 = e =>{
    //     e.preventDefault();
    //     setResult(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setOrder(e.target.value);
        // props.setPlayer(e.target.value)
    }
//     e.preventDefault();
//     const results = props.char.filter( (character) =>{
//   return character.name.toLowerCase().includes(response)
//  })
//   props.setChar(results);
// }} >

    return (
        

            <form onSubmit={handleSubmit} >
                <label>Top Women!</label>
                <input name="player" value={count} onChange={handleChange1}/>
{/* 
                {/* <label>Women by Country</label>
                <input name="location" value={result}  onChange={handleChange2}/> */}

                <button type='Submit'>Submit !</button>
            </form>
    )
}


/* <Selector order={this.state.order} setOrder={(num) => this.setState({order: num})}/> */