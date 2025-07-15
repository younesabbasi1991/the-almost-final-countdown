import Player from './components/Player.jsx';
import TimerChallange from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="easy" targetTime={1} />
        <TimerChallange title="Not easy" targetTime={5} />
        <TimerChallange title="Getting tough" targetTime={10} />
        <TimerChallange title="pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
