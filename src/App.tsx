import WordCloud from "./components/WordCloud";
import "bulma/css/bulma.min.css";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.app}>
      <WordCloud></WordCloud>
    </div>
  );
}

export default App;
