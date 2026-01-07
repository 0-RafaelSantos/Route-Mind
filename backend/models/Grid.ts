import { Node } from './Node';


export class Grid {
readonly width: number;
readonly height: number;
private nodes: Node[][];


constructor(width: number, height: number, obstacles: Array<[number, number]> = []) {
this.width = width;
this.height = height;


this.nodes = [];


for (let y = 0; y < height; y++) {
        const row: Node[] = [];
        for (let x = 0; x < width; x++) {
        row.push(new Node(x, y));
    }
    this.nodes.push(row);
}


obstacles.forEach(([x, y]) => {
        if (this.isInside(x, y)) {
            this.getNode(x, y).walkable = false;
        }
    });
}


getNode(x: number, y: number): Node {
    return this.nodes[y][x];
}


isInside(x: number, y: number): boolean {
    return x >= 0 && x < this.width && y >= 0 && y < this.height;
}


getNeighbors(node: Node): Node[] {
const directions = [
[0, -1], // up
[1, 0], // right
[0, 1], // down
[-1, 0] // left
];


const neighbors: Node[] = [];


for (const [dx, dy] of directions) {
const nx = node.x + dx;
const ny = node.y + dy;


if (this.isInside(nx, ny)) {
    const neighbor = this.getNode(nx, ny);
        if (neighbor.walkable) {
        neighbors.push(neighbor);
        }
    }
}


return neighbors;
}


reset(): void {
        for (const row of this.nodes) {
            for (const node of row) {
            node.reset();
            }
        }
    }
}