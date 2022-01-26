import React from "react";

const ComponentB = (props) => {
    return (
        <div style={{backgroundColor:"red", width:"80%"}}>
            Componente B
            <div>{props.children}</div>
        </div>
    )
}

export default ComponentB;