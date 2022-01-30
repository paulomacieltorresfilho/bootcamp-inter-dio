import React, { Component } from "react";
import "./style.css"

class SorveteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sabor: 'uva',
            casquinha: true,
            guardanapos: 'sim'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const {sabor, casquinha, guardanapos} = this.state;
        alert(`Sabor: ${sabor}\nGuardanapos: ${guardanapos}\nCasquinha: ${casquinha}`)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="example sorvete">

                <label>
                    Escolha o sabor:
                    <select name="sabor" value={this.state.sabor} onChange={this.handleInputChange}>
                        <option value="uva">uva</option>
                        <option value="limao">limão</option>
                        <option value="coco">coco</option>
                        <option value="chocolate">chocolate</option>
                        <option value="morango">morango</option>
                    </select>
                </label>
                <label>
                    <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleInputChange} />
                    Colocar na casquinha?
                </label>
                <label>
                    Guardanapos?
                    <div className="radio">
                        <label>
                            <input type="radio" id="guardanapos" name="guardanapos" value="sim" checked={this.state.guardanapos === 'sim'} onChange={this.handleInputChange} />
                            sim
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" id="guardanapos" name="guardanapos" value="nao" checked={this.state.guardanapos === 'nao'} onChange={this.handleInputChange} />
                            nao
                        </label>
                    </div>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default SorveteForm;