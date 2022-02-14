import "./style.css";
import Radio from "./Radio";
import backgroundVideo from "./background.mp4";

function App() {
  return (
    <div className="App">
    <video autoPlay loop muted className="video">
      <source src={backgroundVideo} type='video/mp4' />
    </video>
      <h1>Simple Online Radio Player</h1>
      <h2>Choose a station, pick a genre and enjoy music!</h2>
      <Radio />
    </div>
  );
}

export default App;
