import Button from "../Button";
import { useState } from 'react';

const Card = () => {

    const [ valor, setValor ] = useState(0);

    function Adicionar() {
        setValor(valor + 1);
    }

    function Subtrair() {
        setValor(valor - 1);
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button 
                    onClick={Subtrair}
                >
                    -
                </Button>
                <span>{valor}</span>
                <Button 
                    onClick={Adicionar}
                >
                    +
                </Button>
            </div>
        </div>
    )
}

export default Card;