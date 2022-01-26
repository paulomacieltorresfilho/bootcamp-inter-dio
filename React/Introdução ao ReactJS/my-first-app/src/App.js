import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import Button from "./components/Button";

import './App.css';

export default class App extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {clock: 1000, copo:'agua'};
    }
    
    alterarCopo() {
        this.setState({
            copo: 'refrigerante'
        })
    }

    componentDidMount = () => {
        console.log("Mountou! Em três segundos botão irá mudar!")
        window.setTimeout(() => {
            this.setState({copo: 'suco'})
        }, 3000);
    }

    render() {
        const { copo } = this.state;
        return (
            <div className="App">
                <Navbar />
                <ComponentA>
                    <ComponentB>
                        <Button onClick={() =>  this.alterarCopo()} text={copo}/>
                    </ComponentB>
                </ComponentA>
            </div>
        )
    }
}