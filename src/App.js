import './App.css';
import React from "react";

const marked = require("marked");

const Editor = (props) => {
    return (
        <div>
            <textarea id="editor" onChange={props.handleChange} value={props.content} />
        </div>
    );
}

const Preview = (props) => {
    const htmlConverted = marked(props.content);
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: htmlConverted}} />
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'markdown'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Markdown Previewer</h1>
                    <Editor content={this.state.content} handleChange={this.handleChange} />
                    <Preview content={this.state.content} />
                </header>
            </div>
        );
    }
}

export default App;
