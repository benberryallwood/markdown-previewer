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
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(props.content)}} />
    );
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: defaultContent
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
                    <Editor content={this.state.content} handleChange={this.handleChange} />
                    <Preview content={this.state.content} />
                </header>
            </div>
        );
    }
}

const defaultContent = `# Markdown Previewer
This is a markdown previewer built using [React](https://reactjs.org).

---

## What You Can Do With Markdown
- You can make text *italic* with \`*italic*\`
- You can make text **bold** with \`**bold**\`

Lists are written as follows:

    - List item 1
    - List item 2
    - List item 3

You can also include an image:

![React Logo](https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png)

>Markdown is great
`;

export default App;






























