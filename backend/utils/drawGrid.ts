import { Grid } from '../models/Grid';
import { Node } from '../models/Node';

export function drawGrid(
  grid: Grid,
  path: Node[],
  start: Node,
  goal: Node
): void {
  const pathSet = new Set(path.map(n => `${n.x},${n.y}`));

  for (let y = 0; y < grid.height; y++) {
    let row = '';

    for (let x = 0; x < grid.width; x++) {
      const node = grid.getNode(x, y);

      if (node === start) {
        row += 'S ';
      } else if (node === goal) {
        row += 'G ';
      } else if (!node.walkable) {
        row += 'X ';
      } else if (pathSet.has(`${x},${y}`)) {
        row += '* ';
      } else {
        row += '. ';
      }
    }

    console.log(row);
  }
}