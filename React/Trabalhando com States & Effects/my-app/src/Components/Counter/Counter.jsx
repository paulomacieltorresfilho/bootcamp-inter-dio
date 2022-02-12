import { useState } from "react";
import styled from 'styled-components';

export function Counter() {

    const [ counter, setCounter ] = useState(10)

    function increase() {
        setCounter(counter + 1);
    }

    return (
        <CounterStyled>
            <h1>Contador</h1>
            <p id="counter-box">{counter}</p>
            <button onClick={increase}>Aumentar</button>
        </CounterStyled>
    )
}

const CounterStyled = styled.div`
    border: 1px solid #cecece;
    background-color: whitesmoke;
    margin-left: 10px;
    width: fit-content;
`;

