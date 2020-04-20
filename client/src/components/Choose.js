import React from 'react';
import { useCounter} from '../hooks/useCounter'


export default function Choose (props){
    const [count, setCount] = useCounter(parseInt(props.order));

    console.log('Choose', props);
    
    const handleChange = e => {
        e.preventDefault();
        props.setOrder(e.target.value);
        setCount(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setOrder(e.target.value);
    }

    return (
            <form onSubmit={handleSubmit} >
                <label>Top Women!</label>
                <input name={"player"} value={count} onChange={handleChange}/>

                <button type='Submit'>Submit !</button>
            </form>
    )
}


/* <Selector order={this.state.order} setOrder={(num) => this.setState({order: num})}/> */