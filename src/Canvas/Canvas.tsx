import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Stage } from "./components/Stage";
import { OrbitControls, Stats } from "@react-three/drei";
import { TitleBackground } from "./components/TitleBackground";

export const Canvas = () => {
  const stageSize = 20;

  return (
    <ThreeCanvas
      style={{ background: "#02182B" }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 40] }}
    >
      <ambientLight />
      <TitleBackground isPlaying={true} />
      <Stage size={stageSize} />
      <OrbitControls />
      {/* <axesHelper args={[10]} /> */}
      <Stats />
    </ThreeCanvas>
  );
};
