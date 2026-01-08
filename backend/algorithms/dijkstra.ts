import { Grid } from '../models/Grid';
import { Node } from '../models/Node';

export interface DijkstraResult {
  path: Node[];
  exploredNodes: number;
  executionTimeMs: number;
}

export function dijkstra(
  grid: Grid,
  start: Node,
  goal: Node
): DijkstraResult {
  const startTime = performance.now();

  // 1. Limpar estado anterior
  grid.reset();

  const openSet: Node[] = [];
  let exploredNodes = 0;

  // 2. Inicializar
  start.g = 0;
  openSet.push(start);

  // 3. Enquanto houver nós por explorar
  while (openSet.length > 0) {

    // 4. Escolher o nó com MENOR custo acumulado
    openSet.sort((a, b) => a.g - b.g);
    const current = openSet.shift()!;
    exploredNodes++;

    // 5. Se chegámos ao objetivo, terminamos
    if (current === goal) {
      break;
    }

    // 6. Explorar vizinhos
    const neighbors = grid.getNeighbors(current);

    for (const neighbor of neighbors) {

      // custo para chegar ao vizinho passando pelo current
      const tentativeCost = current.g + neighbor.cost;

      // 7. Se encontrarmos caminho mais barato
      if (tentativeCost < neighbor.g) {
        neighbor.g = tentativeCost;
        neighbor.parent = current;

        // 8. Adicionar à lista se ainda não estiver
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

function reconstructPath(goal: Node): Node[] {
  const path: Node[] = [];
  let current: Node | null = goal;

  while (current) {
    path.push(current);
    current = current.parent;
  }

  return path.reverse();
}