export class Node {
readonly x: number;
readonly y: number;
walkable: boolean;
cost: number;


// Pathfinding fields
g: number = Infinity; // cost from start
h: number = 0; // heuristic cost to goal
f: number = Infinity; // g + h
parent: Node | null = null;


constructor(x: number, y: number, walkable: boolean = true, cost: number = 1) {
    this.x = x;
    this.y = y;
    this.walkable = walkable;
    this.cost = cost;
}


reset(): void {
    this.g = Infinity;
    this.h = 0;
    this.f = Infinity;
    this.parent = null;
 }
}