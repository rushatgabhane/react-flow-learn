async function getGraphDetails(nodes, edges) {
  return fetch('http://localhost:8000/pipelines/parse', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ nodes, edges }),
  }).then((res) => res.json());
}

export { getGraphDetails };
