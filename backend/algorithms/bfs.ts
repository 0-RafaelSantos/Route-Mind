import { Grid } from '../models/Grid';
import { Node } from '../models/Node';

export interface BFSResult {
  path: Node[];
  exploredNodes: number;
  executionTimeMs: number;
}

export function bfs(
  grid: Grid,
  start: Node,
  goal: Node
): BFSResult {
  const startTime = performance.now();

  grid.reset();

  const queue: Node[] = [];
  let exploredNodes = 0;

  start.g = 0;
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift()!;
    exploredNodes++;

    if (current === goal) {
      break;
    }

    const neighbors = grid.getNeighbors(current);

    for (const neighbor of neighbors) {
      if (neighbor.parent === null && neighbor !== start) {
        neighbor.parent = current;
        neighbor.g = current.g + neighbor.cost;
        queue.push(neighbor);
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

function reconstructPath(goal: Node): Node[] {
  const path: Node[] = [];
  let current: Node | null = goal;

  while (current) {
    path.push(current);
    current = current.parent;
  }

  return path.reverse();
}
