# 🧠 RouteMind

**RouteMind** is an intelligent path planning and decision analysis system designed to compare and evaluate different routing algorithms in grid-based environments.

The project focuses on **algorithmic correctness**, **performance evaluation**, and **clear visualization**, making it suitable for academic purposes, engineering interviews, and applied AI experimentation.

---

## 🎯 Project Goals

* Implement classic and informed path planning algorithms
* Compare algorithms using objective metrics
* Visualize search behavior and final paths
* Provide a clean, extensible architecture
* Demonstrate applied AI and algorithmic reasoning

---

## 🧩 Problem Definition

Given a grid-based environment with:

* a **start node**
* a **goal node**
* **obstacles**
* optional **cell costs**

The system computes a path between start and goal while optimizing for cost or distance, depending on the algorithm.

Each algorithm is evaluated under identical conditions to allow fair comparison.

---

## 🤖 Implemented Algorithms

### Mandatory (Core)

* **Breadth-First Search (BFS)**
* **Dijkstra's Algorithm**
* **A*** (Manhattan & Euclidean heuristics)

### Optional / Extensions

* Greedy Best-First Search
* Weighted A*
* Genetic or heuristic-based approaches (future work)

---

## 📊 Evaluation Metrics

Each execution collects the following metrics:

* Path length
* Total cost
* Number of explored nodes
* Execution time (ms)

Metrics are used to objectively compare algorithm efficiency and optimality.

---

## 🖥️ Visualization

The system includes an interactive visualization layer:

* Grid-based representation (2D)
* Step-by-step exploration animation
* Visual distinction between:

  * explored nodes
  * final path
  * obstacles

> Visualization is intentionally decoupled from algorithm logic.

---

## 🏗️ Architecture Overview

```
RouteMind/
│
├── backend/
│   ├── algorithms/        # Path planning algorithms
│   ├── models/            # Grid and node representations
│   ├── metrics/           # Performance evaluation
│   └── index.ts           # Execution entry point
│
├── frontend/
│   ├── visualizer/        # Grid & animation logic
│   ├── controls/          # UI interactions
│   └── ui/                # Layout and components
│
└── README.md
```

This separation ensures maintainability, testability, and extensibility.

---

## 🧪 Testing

* Unit tests for each algorithm
* Edge cases (blocked paths, trivial paths)
* Randomized grid generation for robustness

---

## 🚀 Tech Stack

* **Language:** TypeScript
* **Backend:** Node.js
* **Frontend:** React
* **Visualization:** HTML Canvas / Three.js (optional)
* **Testing:** Jest

---

## 📈 Example Use Cases

* Algorithm comparison for robotics and logistics
* Academic demonstrations of search algorithms
* AI and software engineering portfolios
* Performance benchmarking experiments

---

## 🧠 Key Engineering Decisions

* Algorithms are deterministic and reproducible
* Metrics are collected independently of visualization
* No framework-specific dependencies in core logic

---

## 📌 Future Improvements

* 3D visualization
* Dynamic obstacle handling
* Multi-agent path planning
* Export results to CSV
* Web-based benchmarking dashboard

---

## 👤 Author

**Rafael Santos**
Software Engineer | Applied AI & Computer Graphics

---

## 📄 License

MIT License
