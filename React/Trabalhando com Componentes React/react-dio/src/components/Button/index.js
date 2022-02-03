import styled from 'styled-components';

const Button1 = styled.button`
    width: 35px;
    margin-left: 10px;
    margin-right: 10px;
`;

const Button = ({ onClick, children }) => {
    return (
        <Button1 type="button" className="btn btn-outline-primary" onClick={onClick}>{children}</Button1>
    )
}

export default Button;