import React from "react";

const ComponentA = (props) => {
    return (
        <div style={{backgroundColor:"#595959"}}>
            Componente A
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentA;