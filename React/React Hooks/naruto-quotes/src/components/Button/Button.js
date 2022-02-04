import styled from 'styled-components';
import { string } from 'prop-types';

export function Button({ children, onClick }) {
    return (
       <ButtonStd onClick={onClick}>{children}</ButtonStd>
    )
}

Button.propTypes = {
    children: string
};

const ButtonStd = styled.button`
    background: #DC872C;
    color: #fff;
    border: none;
    font-size: 1.5em;
    padding: 10px 20px;
    cursor: pointer;
    box-shadow: #333 3px 3px;
    &:hover {
        background-color: #a40000;
    }
`;

