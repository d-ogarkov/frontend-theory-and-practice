const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

const table = new Table('.data-table');

api.getPosts()
  .then((res) => {
    table.fill(res);
  });
