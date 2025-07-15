import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  function hanndleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Unkonwn Entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={hanndleClick}>Set Name</button>
      </p>
    </section>
  );
}
