import { Canvas as ThreeCanvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

type BoxProps = {
  initialPosition?: [number, number, number];
};
export const Box = ({ initialPosition = [1, 1, 1] }: BoxProps) => {
  const boxRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    boxRef.current.position.x += 0.01;
    boxRef.current.position.y += 0.01;
  });

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <mesh ref={boxRef} position={initialPosition}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={getRandomColor()} />
    </mesh>
  );
};

export const Canvas = () => {
  return (
    <ThreeCanvas
      style={{ background: "#D7D9CE" }}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 40] }}
    >
      <ambientLight />
      <Box />
      <Box initialPosition={[2, 2, 2]} />
      <Box initialPosition={[2, -3, 2]} />
      <Box initialPosition={[2, 3, 2]} />
      <Box initialPosition={[2, 2, 4]} />
      <Box initialPosition={[1, 2, 2]} />
    </ThreeCanvas>
  );
};
