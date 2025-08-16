import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true);
    setButtonClicked(true);
    try {
      const response = await axios.post('http://localhost:3000/api/ai/get-review', { code });
      setReview(response.data);
    } catch {
      setReview("Error: Could not fetch review.");
    } finally {
      setLoading(false);
      setTimeout(() => setButtonClicked(false), 200); // reset button click effect
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              borderRadius: "0.7rem",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <button
          className={`review-btn ${buttonClicked ? "clicked" : ""}`}
          onClick={reviewCode}
          disabled={loading}
        >
          {loading ? "Reviewing..." : "Review"}
        </button>
      </div>
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
