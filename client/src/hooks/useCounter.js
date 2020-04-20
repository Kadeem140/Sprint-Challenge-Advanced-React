
import React,{ useState, useEffect } from 'react';

export function useCounter(value) {
    const [count, setCount] = useState(value)
    
    useEffect(() => {
        count <= 10 ? document.body.style.backgroundColor = '#FFD700'  : document.body.style.backgroundColor = '#C0C0C0';
    },[count])

    const setNewCount = nextValue => {
        setCount(nextValue)
    }
    return [count, setNewCount]
}