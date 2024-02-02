import { Canvas } from "./Canvas/Canvas";
import { GameContextProvider } from "./GameContext";

function App() {
  return (
    <GameContextProvider>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <div style={{ textAlign: "center" }}>
          Galactic BattleEmojis CubeQuest Saga: The Ultimate 3D Emoji Conquest
          Adventure in the Fantastical Cube Universe Showdown Extravaganza
          Championship
        </div>
        <div style={{ flex: 1 }}>
          <Canvas />
        </div>
      </div>
    </GameContextProvider>
  );
}

export default App;
