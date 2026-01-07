New-Item backend -ItemType Directory -Force
New-Item backend\algorithms -ItemType Directory -Force
New-Item backend\models -ItemType Directory -Force
New-Item backend\metrics -ItemType Directory -Force

New-Item frontend -ItemType Directory -Force
New-Item frontend\visualizer -ItemType Directory -Force
New-Item frontend\controls -ItemType Directory -Force
New-Item frontend\ui -ItemType Directory -Force

New-Item backend\index.ts -ItemType File -Force
New-Item README.md -ItemType File -Force

New-Item backend\models\Node.ts -ItemType File -Force
New-Item backend\models\Grid.ts -ItemType File -Force

New-Item backend\algorithms\bfs.ts -ItemType File -Force
New-Item backend\algorithms\dijkstra.ts -ItemType File -Force
New-Item backend\algorithms\astar.ts -ItemType File -Force

New-Item backend\metrics\evaluator.ts -ItemType File -Force
