import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Topico1Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    border: 1px solid #cecece;
`;

export const Topico1 = () => {
    const [cientistas, setCientistas] = useState([]);


    // Hook equivalente a componentDidMount()
    useEffect(() => {
        fetch('https://cat-fact.herokuapp.com/facts')
            .then(response => response.json())
            .then(data => {
                setCientistas(data);
            })
            .catch(err => {
                alert('Ops! Deu erro irmão');
                alert(err);
            });
    }, []);

    return (
        <Topico1Block>
        <h1>Cat Facts</h1>
        <ul>
            {cientistas.map((cientista, index) => (
                <Item key={index}>
                    <div><b>nome:</b> {cientista.user}</div>
                    <div><b>area:</b> {cientista.text}</div>
                </Item>
            ))}
        </ul>
        </Topico1Block>
    );
}