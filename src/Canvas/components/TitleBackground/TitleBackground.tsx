import * as THREE from "three";
import { memo, useMemo, useRef } from "react";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { Object3DNode, extend, useFrame } from "@react-three/fiber";
import { Flow } from "three/addons/modifiers/CurveModifier.js";
import { createCircleCurve } from "./utils";
// https://stackoverflow.com/a/75905356
import titleFont from "../../fonts/Major Mono Display_Regular.json";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
extend({ TextGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
  }
}

type RotatingTitleProps = {
  color?: string;
};
const RotatingTitle = ({ color = "#99ffff" }: RotatingTitleProps) => {
  const font = useMemo(() => new FontLoader().parse(titleFont), []);

  const flowRef = useRef<Flow | null>(null);

  const [curve] = useMemo(() => {
    const curve = createCircleCurve(20, 50, true, "y");
    curve.curveType = "centripetal";
    curve.closed = true;

    const points = curve.getPoints(50);

    // points returned in case we need it later
    return [curve, points];
  }, []);

  if (!flowRef.current) {
    const geometry = new TextGeometry("em_cube", {
      font,
      size: 4,
      height: 2,
      curveSegments: 12,
    });
    geometry.scale(-1, -1, -1);

    const material = new THREE.MeshStandardMaterial({
      color,
      wireframe: true,
      wireframeLinewidth: 1,
    });

    const objectToCurve = new THREE.Mesh(geometry, material);

    flowRef.current = new Flow(objectToCurve);
    flowRef.current.updateCurve(0, curve);
  }

  useFrame(() => {
    if (flowRef.current) {
      flowRef.current.moveAlongCurve(-0.001);
    }
  });

  return <primitive object={flowRef.current.object3D} />;
};

type Props = {
  isPlaying: boolean;
  stageSize?: number;
};
export const TitleBackground = memo(({}: Props) => {
  // TODO: use props
  return (
    <>
      <group rotation={[0, 0, 0]}>
        <RotatingTitle color="pink" />
      </group>
      <group rotation={[Math.PI / 4, 0, 0]}>
        <RotatingTitle color="pink" />
      </group>
      <group rotation={[-Math.PI / 4, 0, 0]}>
        <RotatingTitle color="pink" />
      </group>
      <group rotation={[(-3 * Math.PI) / 4, 0, 0]}>
        <RotatingTitle color="pink" />
      </group>
      <group rotation={[(3 * Math.PI) / 4, 0, 0]}>
        <RotatingTitle color="pink" />
      </group>
      <group rotation={[Math.PI, 0, 0]}>
        <RotatingTitle color="pink" />
      </group>
    </>
  );
});
