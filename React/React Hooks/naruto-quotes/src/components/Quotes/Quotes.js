import styled from 'styled-components';
import { Button } from '../';
import { string, func } from 'prop-types';

export const Quotes = ({ text, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{text}</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>Quote No Jutsu</Button>
    </Wrapper>
  )
}

Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;

const Speaker = styled(Quote)`
  text-align: right;
  margin-bottom: 45px;
`;
