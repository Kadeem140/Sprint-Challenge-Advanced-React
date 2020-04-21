import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const sum = (a,b) => {
    return a + b;
};

console.log(sum(10, 10));

export const fetchPlayer = () => { 
    axios.get(`http://localhost:5000/api/players`)
        .then(res => {
            console.log('Fetch Player results',res.data);
            // this.setState({
            //      player : res.data
            //     })
        })
        .catch(err => console.log(err))  
}
