import { Canvas } from "./Canvas/Canvas";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        Galactic BattleEmojis CubeQuest Saga: The Ultimate 3D Emoji Conquest
        Adventure in the Fantastical Cube Universe Showdown Extravaganza
        Championship
      </div>
      <div style={{ flex: 1 }}>
        <Canvas />
      </div>
    </div>
  );
}

export default App;
