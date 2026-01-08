import { Grid } from './models/Grid';
import { drawGrid } from './utils/drawGrid';
import { bfs } from './algorithms/bfs';
import { dijkstra } from './algorithms/dijkstra';
import { astar } from './algorithms/astar';

function createScenario() {
  const grid = new Grid(10, 6);

  // Obstáculos
  grid.getNode(3, 1).walkable = false;
  grid.getNode(4, 1).walkable = false;
  grid.getNode(5, 1).walkable = false;

  // Custos altos
  grid.getNode(1, 0).cost = 5;
  grid.getNode(2, 0).cost = 5;
  grid.getNode(3, 0).cost = 5;

  const start = grid.getNode(0, 0);
  const goal = grid.getNode(8, 4);

  return { grid, start, goal };
}

type AlgorithmFn = (grid: Grid, start: any, goal: any) => {
  path: any[];
  exploredNodes: number;
  executionTimeMs: number;
};

function runAlgorithm(
  name: string,
  algorithm: AlgorithmFn,
  grid: Grid,
  start: any,
  goal: any
) {
  const result = algorithm(grid, start, goal);

  return {
    name,
    pathLength: result.path.length,
    explored: result.exploredNodes,
    time: result.executionTimeMs.toFixed(3)
  };
}


const results = [];

// BFS
{
  const { grid, start, goal } = createScenario();
  results.push(runAlgorithm('BFS', bfs, grid, start, goal));
}

// Dijkstra
{
  const { grid, start, goal } = createScenario();
  results.push(runAlgorithm('Dijkstra', dijkstra, grid, start, goal));
}

// A*
{
  const { grid, start, goal } = createScenario();
  results.push(runAlgorithm('A*', astar, grid, start, goal));
}

console.log('\nAlgorithm comparison:\n');
console.table(results);