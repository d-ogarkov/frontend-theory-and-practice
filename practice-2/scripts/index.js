function showData(dataURL) {
  const api = new Api({
    baseUrl: dataURL,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const table = new Table('.data-table');

  api.getPosts()
    .then((res) => {
      table.fill(res);
    });
}

showData('https://jsonplaceholder.typicode.com');
