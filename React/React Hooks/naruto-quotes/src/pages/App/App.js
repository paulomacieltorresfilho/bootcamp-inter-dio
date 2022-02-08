import { useEffect, useState, useRef } from 'react';
import narutoImg from '../../images/naruto.png';
import styled from 'styled-components';
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import jutsoSound from '../../sounds/jutso.mp3';

const audio = new Audio(jutsoSound);

export function App() {

  const isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
    text: 'loading...',
    speaker: 'loading speaker...'
  })

  async function onUpdate() {
    const quote = await getQuote();

    if (isMounted.current) {
      audio.play();
      setQuoteState(quote)
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }
  }, [])

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate}/>
      <NarutoImg src={narutoImg} alt="Naruto with a Kunai"/>
    </Content>
  )
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  max-height: 100vh;
  align-self: flex-end;
`;
