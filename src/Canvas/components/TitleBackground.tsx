import { Vector3, Box3, EllipseCurve, Vector2 } from "three";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { Object3DNode, extend } from "@react-three/fiber";
import titleFont from "../fonts/Major Mono Display_Regular.json";
// https://stackoverflow.com/a/75905356
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

type Props = {
  isPlaying: boolean;
  stageSize?: number;
};

export const TitleBackground = ({ isPlaying, stageSize = 10 }: Props) => {
  const titleRef = useRef<THREE.Mesh<TextGeometry>>(null!);
  const position = useRef(new Vector3(0, 0, 0));

  const font = new FontLoader().parse(titleFont);

  // useEffect(() => {
  //   const boundingBox = new Box3().setFromObject(titleRef.current);
  //   const size = new Vector3();
  //   boundingBox.getSize(size);
  //   const width = size.x;

  //   // set position to be centered
  //   position.current.set(-width / 2, 0, 0);
  //   console.log("position set to ", position.current.x);
  // }, []);

  const curve = useMemo(
    () => new EllipseCurve(0, 0, 10, 10, 0, 2 * Math.PI, false, 0),
    []
  );
  const points = useMemo(() => {
    const points = curve.getPoints(50);
    const positions = new Float32Array(points.length * 3);
    const sizes = new Float32Array(points.length * 3);
    points.forEach((point, idx) => {
      const realIdx = idx * 3;

      positions[realIdx] = point.x;
      positions[realIdx + 1] = point.y;
      positions[realIdx + 2] = 0;

      sizes[realIdx] = 1;
      sizes[realIdx + 1] = 1;
      sizes[realIdx + 2] = 1;
    });
    return [positions, sizes];
  }, [curve]);

  return (
    <>
      <mesh position={position.current} ref={titleRef}>
        <textGeometry
          args={[
            "em_cube",
            {
              font,
              size: 8,
              height: 4,
            },
          ]}
        />
        <meshStandardMaterial
          color="#D7D9CE"
          wireframe
          wireframeLinecap="butt"
          wireframeLinejoin="butt"
        />
      </mesh>
      <lineLoop>
        <bufferGeometry>
          <bufferAttribute
            attachObject={["attributes", "position"]}
            count={points.length}
            array={points[0]}
            itemSize={3}
          />
        </bufferGeometry>
      </lineLoop>
    </>
  );
};
