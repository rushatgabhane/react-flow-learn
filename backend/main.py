from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from collections import deque, defaultdict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

def create_graph(nodes, edges):
    graph = {}
    for node in nodes:
        graph[node['id']] = []
    for edge in edges:
        graph[edge['source']].append(edge['target'])
    return graph

def is_dag(graph):
    in_degree = defaultdict(int)
    for node in graph:
        in_degree[node] = 0
    for node in graph:
        for neighbour in graph[node]:
            in_degree[neighbour] += 1

    # Enqueue nodes having in-degree 0
    queue = deque([node for node in graph if in_degree[node] == 0])
    topological_order = []

    while queue:
        node = queue.popleft()
        topological_order.append(node)
        for neighbour in graph[node]:
            in_degree[neighbour] -= 1
            if in_degree[neighbour] == 0:
                queue.append(neighbour)

    # If topological order contains all nodes, then it is a DAG
    if len(topological_order) == len(graph):
        return True
    else:
        return False

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: Request):
    json_pipeline = await pipeline.json()   
    nodes = json_pipeline['nodes']
    edges = json_pipeline['edges']

    graph = create_graph(nodes, edges)

    return {'num_nodes': len(nodes), 'num_edges': len(edges), 'is_dag': is_dag(graph)}
