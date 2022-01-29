import React, { Component } from "react";

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(
            `Arquivo selecionado - ${
                this.fileInput.current.files[0].name
            }`
        );
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit} className="example file">
            <label style={{display:"flex", flexDirection:"row", gap:'8px'}}>
                Upload de Arquivo
                <input type="file" ref={this.fileInput} />
            </label>
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default FileInput;