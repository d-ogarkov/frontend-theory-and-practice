const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

const table = new Table('.table-sorted');
const sorter = new TableSort('.table-sorted');
const filter = new TableFilter('.table-sorted', '.search-input', 3);

api.getPosts()
  .then((res) => {
    table.fill(res);
    table.fixWidth();
    sorter.enableSorting();
    filter.enableFilter();
  });
