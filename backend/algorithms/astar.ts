import { Grid } from '../models/Grid';
import { Node } from '../models/Node';

export interface AStarResult {
  path: Node[];
  exploredNodes: number;
  executionTimeMs: number;
}

export function astar(
  grid: Grid,
  start: Node,
  goal: Node
): AStarResult {
  const startTime = performance.now();

  grid.reset();

  const openSet: Node[] = [];
  let exploredNodes = 0;

  // Inicializar
  start.g = 0;
  start.h = heuristic(start, goal);
  start.f = start.g + start.h;

  openSet.push(start);

  while (openSet.length > 0) {

    // Escolher nó com menor f
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift()!;
    exploredNodes++;

    // Chegámos ao objetivo
    if (current === goal) {
      break;
    }

    const neighbors = grid.getNeighbors(current);

    for (const neighbor of neighbors) {
      const tentativeG = current.g + neighbor.cost;

      if (tentativeG < neighbor.g) {
        neighbor.parent = current;
        neighbor.g = tentativeG;
        neighbor.h = heuristic(neighbor, goal);
        neighbor.f = neighbor.g + neighbor.h;

        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  const path = reconstructPath(goal);
  const endTime = performance.now();

  return {
    path,
    exploredNodes,
    executionTimeMs: endTime - startTime
  };
}

// 🔹 Heurística Manhattan
function heuristic(a: Node, b: Node): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function reconstructPath(goal: Node): Node[] {
  const path: Node[] = [];
  let current: Node | null = goal;

  while (current) {
    path.push(current);
    current = current.parent;
  }

  return path.reverse();
}
