import { useState } from "react";
import gencloud from "../utils/wordCloud";
import generateCloud from "../utils/generateCloud";
import styles from "./WordCloud.module.css";

function WordCloud() {
  const [inputText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function generateWordCloud() {
    if (inputText) {
      const data = gencloud(inputText);
      const url = generateCloud(data);
      setTimeout(() => {
        setImageUrl(url);
      }, 100);
    }
  }

  return (
    <div className="columns is-centered">
      <div className="column is-half">
        <div className="card-image">
          {imageUrl && <img src={imageUrl} alt="Word cloud" />}
        </div>

        <textarea
          rows={5}
          cols={50}
          className={`textarea is-primary ${styles.textarea}`}
          placeholder="Enter your text here"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
        />
        <br />
        <button className="button is-primary" onClick={generateWordCloud}>
          Generate Word Cloud
        </button>

        <div id="wordcloud"></div>
      </div>
    </div>
  );
}

export default WordCloud;
