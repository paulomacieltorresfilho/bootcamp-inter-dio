import styled, { css } from 'styled-components';
import { useState, useEffect } from 'react';

export function IfoodCounter() {

    const [counter, setCounter] = useState(1);
    const [isInactive, setInactive] = useState(counter === 0);
    const [price, setPrice] = useState((counter * 2.50).toFixed(2));

    function increment() {
        setCounter(counter + 1);
        setInactive(false);
    }

    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1);
            setInactive(counter <= 1);
        }        
    }

    useEffect(() => {
        setPrice((counter * 2.50).toFixed(2));
    }, [counter])

    return (
        <CounterWrapper>
            <Button minus isInactive={isInactive} onClick={decrement}>-</Button>
            <p>{counter}</p>
            <Button plus onClick={increment}>+</Button>
            <span 
                style ={{
                    marginRight: '8px'
                }}>
                    {price}
            </span>
        </CounterWrapper>
    )
}

const CounterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid rgb(192, 192, 192);
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: fit-content;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
`; 

const Button = styled.button`
    border: none;
    background-color: transparent;
    height: 100%;
    cursor: pointer;
    margin: 0 6px;
    color: red;
    
    
    ${props => props.plus ? css`
        font-size: 16px;
    `
    : css`
        font-size: larger;
    `};

    ${props => props.isInactive && css`
        color: rgb(105, 105, 105);
        cursor: default;
    `}
`;