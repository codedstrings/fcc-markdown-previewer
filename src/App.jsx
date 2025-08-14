import "./App.css";
import { useState } from "react";
import { marked } from "marked";

function App() {
  // State to hold the markdown input
  const [markdownText, setMarkdownText] = useState("");

  const handleInput = (event) => {
    const input = event.target.value;
    setMarkdownText(input); // Store the raw markdown
  };

  // Convert to HTML in the render
  const htmlOutput = marked.parse(markdownText);

  return (
    <>
      <h1>Markdown Previewer</h1>
      <div className="card">
        <label htmlFor="editor"></label>
        <textarea
          id="editor"
          onChange={handleInput}
          placeholder="Enter Markdown here"
        />
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: htmlOutput }}></div>
    </>
  );
}

export default App;
