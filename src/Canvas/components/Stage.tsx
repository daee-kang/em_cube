import { GridHelper } from "three";

type StageProps = {
  size?: number;
  segments?: number;
  position?: [number, number, number];
};
export const Stage = ({ size = 20, segments = 1, position }: StageProps) => {
  const positionSize = size / 2;

  const DefaultGridHelperArgs = [
    size,
    segments,
    "2E2F2F",
  ] as ConstructorParameters<typeof GridHelper>;

  return (
    <group position={position}>
      <gridHelper
        args={DefaultGridHelperArgs}
        position={[0, -positionSize, 0]}
      />
      <gridHelper
        args={DefaultGridHelperArgs}
        position={[0, positionSize, 0]}
      />
      <gridHelper
        args={DefaultGridHelperArgs}
        position={[-positionSize, 0, 0]}
        rotation-z={Math.PI / 2}
      />
      <gridHelper
        args={DefaultGridHelperArgs}
        position={[0, 0, -positionSize]}
        rotation-x={Math.PI / 2}
      />
      <gridHelper
        args={DefaultGridHelperArgs}
        position={[0, 0, positionSize]}
        rotation-x={Math.PI / 2}
      />
      <gridHelper
        args={DefaultGridHelperArgs}
        position={[positionSize, 0, 0]}
        rotation-z={Math.PI / 2}
      />
    </group>
  );
};
