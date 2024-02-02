import * as THREE from "three";

/**
 * Creates a circle using THREE.CatmullRomCurve3 on the specified axis plane.
 *
 * @param {number} radius - The radius of the circle.
 * @param {number} segments - The number of segments to divide the circle into.
 * @param {boolean} closed - Whether the curve should be closed, forming a loop.
 * @param {'x' | 'y' | 'z'} axis - The axis around which the circle will be oriented ('x', 'y', or 'z').
 * @returns {THREE.CatmullRomCurve3} - The CatmullRomCurve3 representing the circle.
 */
export function createCircleCurve(
  radius: number = 5,
  segments: number = 8,
  closed: boolean = true,
  axis: "x" | "y" | "z" = "z"
): THREE.CatmullRomCurve3 {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);
    let z = 0;

    switch (axis) {
      case "x":
        points.push(new THREE.Vector3(0, x, y)); // Circle in the YZ plane
        break;
      case "y":
        points.push(new THREE.Vector3(x, 0, y)); // Circle in the XZ plane
        break;
      case "z":
      default:
        points.push(new THREE.Vector3(x, y, 0)); // Circle in the XY plane
        break;
    }
  }

  return new THREE.CatmullRomCurve3(points, closed);
}
