# RouteMind

RouteMind is a **pathfinding and decision‑making project** focused on comparing classic AI search algorithms in a controlled grid environment.
The goal is to demonstrate, in a **clear and visual way**, how different algorithms behave when facing obstacles and variable movement costs.

This project was designed as a **portfolio‑level example** of applied Artificial Intelligence and algorithmic reasoning.

---

## 🚀 Features

- Grid‑based environment
- Obstacles and variable terrain costs
- Implementations of:
- **Breadth‑First Search (BFS)**
- **Dijkstra’s Algorithm**
- **A\*** (A‑Star)
- ASCII visualization of paths in the terminal
- Automatic comparison of algorithms using real metrics

---

## 🧠 Algorithms Implemented

### 🔹 Breadth‑First Search (BFS)
- Explores the grid uniformly
- Guarantees the shortest path in number of steps
- Ignores movement cost
- Explores many unnecessary nodes

**Best used when:** all movements have equal cost

---

### 🔹 Dijkstra
- Considers movement cost of each cell
- Guarantees the cheapest path
- Explores fewer nodes than BFS

**Best used when:** terrain costs vary

---

### 🔹 A\* (A‑Star)
- Combines real cost (`g`) with heuristic estimation (`h`)
- Uses Manhattan distance as heuristic
- Finds optimal paths while exploring far fewer nodes

**Best used when:** you want optimal paths with high performance (games, robotics, GPS)

---


## 🗺️ Grid Representation

Symbols used in the terminal visualization:

- `S` → Start node
- `G` → Goal node
- `*` → Path found by the algorithm
- `X` → Obstacle (non‑walkable)
- `.` → Free cell

Example:

S * * * .
. X X * .
. . . * G
```

---

## 📊 Algorithm Comparison

All algorithms are executed on the **same scenario** and compared using:

- Path length
- Number of explored nodes
- Execution time (ms)

Example output:

Algorithm | Path Length | Explored Nodes | Time (ms)
-----------------------------------------------------
BFS       |      14     |       52       |   0.34
Dijkstra  |      16     |       34       |   0.41
A*        |      16     |       15       |   0.18

This comparison highlights how **A\*** achieves the same optimal path as Dijkstra while being significantly more efficient.

---

## 🏗️ Project Structure

RouteMind/
├── backend/
│ ├── algorithms/
│ │ ├── bfs.ts
│ │ ├── dijkstra.ts
│ │ └── astar.ts
│ ├── models/
│ │ ├── Grid.ts
│ │ └── Node.ts
│ ├── utils/
│ │ └── drawGrid.ts
│ └── index.ts
└── README.md
---

## ▶️ How to Run

### 1️⃣ Install dependencies


  bash
npm install

### 2️⃣ Run the project

  bash
npx ts-node backend/index.ts

The terminal will display:
- Algorithm metrics
- ASCII visualization of the resulting path

---

## 🎯 Learning Outcomes

This project demonstrates:

- Applied Artificial Intelligence
- Algorithm comparison and benchmarking
- Clean architecture and separation of concerns
- Practical understanding of search algorithms

---

## 🔮 Possible Extensions

- Diagonal movement
- Weighted heuristics
- 2D/3D graphical visualization (Canvas / Three.js)
- Real‑world map data

---

## 👤 Author

**Rafael Santos**
Computer Engineer

---

⭐ If you found this project useful, consider giving it a star!
