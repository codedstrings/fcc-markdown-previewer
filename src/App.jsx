import "./App.css";
import { useState } from "react";
import { marked } from "marked";

// Configure marked options for better rendering
marked.setOptions({
  breaks: true, // for optional bonus requirement
  gfm: true, // GitHub Flavored Markdown
});

const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  const handleInput = (event) => {
    const input = event.target.value;
    setMarkdownText(input); // Store the raw markdown
  };

  // Convert to HTML in the render
  const htmlOutput = marked.parse(markdownText);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Markdown Previewer</h1>
      </header>

      <div className="container">
        <div className="editor-container">
          <div className="toolbar">
            <i className="fa fa-code"></i>
            <span>Editor</span>
          </div>
          <textarea
            id="editor"
            value={markdownText}
            onChange={handleInput}
            placeholder="Enter Markdown here..."
          />
        </div>

        <div className="preview-container">
          <div className="toolbar">
            <i className="fa fa-eye"></i>
            <span>Preview</span>
          </div>
          <div id="preview" dangerouslySetInnerHTML={{ __html: htmlOutput }} />
        </div>
      </div>
    </div>
  );
}

export default App;
