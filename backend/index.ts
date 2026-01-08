import { Grid } from './models/Grid';
import { bfs } from './algorithms/bfs';

const grid = new Grid(10, 10, [
  [3, 3],
  [3, 4],
  [3, 5],
  [4, 5],
  [5, 5]
]);

const start = grid.getNode(0, 0);
const goal = grid.getNode(9, 9);

const result = bfs(grid, start, goal);

//Mostrar resultados
console.log('Path length:', result.path.length);
console.log('Explored nodes:', result.exploredNodes);
console.log('Execution time (ms):', result.executionTimeMs);

console.log(
  'Path:',
  result.path.map(n => `(${n.x},${n.y})`).join(' -> ')
);
