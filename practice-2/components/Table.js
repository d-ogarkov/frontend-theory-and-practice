class Table {
  constructor(selectorTable) {
    this._table = document.querySelector(selectorTable);
  }

  addHeader(element) {
    let content = '<tr>';
    Object.keys(element).forEach((key) => {
      content += `<th>${key}</th>`;
    });
    content += "</tr>";
    this._table.insertAdjacentHTML('beforeend', content);
  }

  addRow(element) {
    let content = '<tr>';
    let value;
    Object.keys(element).forEach((key) => {
      value = element[key];
      console.log(value);
      content += `<td>${value}</td>`;
    });
    content += "</tr>";
    this._table.insertAdjacentHTML('beforeend', content);
  }

  fill(elements) {
    // Доверимся предположению, что каждый элемент содержит одну и ту же структуру, и создадим заголовок по ключам первого элемента
    this.addHeader(elements[0]);

    // Заполним ряды таблицы элементами
    elements.forEach(element => {
      this.addRow(element);
    });
  }
}