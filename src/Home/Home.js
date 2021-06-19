import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/html";
import "brace/theme/xcode";
import "brace/theme/monokai";
import React from "react";
import "./Home.css";
import DownloadLink from 'react-download-link';
export default function Home(props) {
  const [content, setContent] = React.useState("<html></html>");
  const [editorMode, setEditorMode] = React.useState("xcode");
  return (
    <div>
      <h2>Playment Editor (HTML/CSS/JS)</h2>
      <div>
        <select
          style={{ padding: "7px" }}
          onChange={(e) => setEditorMode(e.target.value)}
        >
          <option value="xcode">Light Mode</option>
          <option value="monokai">Dark Mode</option>
        </select>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "7px",
            marginLeft: "15px",
          }}
          onClick={() => {
            document.getElementById("output").innerHTML = content;
          }}
        >
          Run Code
        </button>
       
        <DownloadLink
          label="Save Code"
          style={{backgroundColor:'blue',color:'white',padding:'6px',marginLeft:'15px',textDecoration:'none'}}
          filename="download.txt"
          exportFile={() => ""+content}
        />
      </div>
      <div className="homepane">
        <div class="acepane">
          <AceEditor
            mode="html"
            style={{
              width: "auto",
            }}
            value={content}
            theme={editorMode}
            onChange={(value) => {
              setContent(value);
            }}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{
              $blockScrolling: true,
            }}
          />
        </div>
        <div className="outputpane" id="output"></div>
      </div>
    </div>
  );
}
