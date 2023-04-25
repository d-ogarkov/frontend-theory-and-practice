class Table {
  constructor(selectorTable) {
    this._table = document.querySelector(selectorTable);
  }

  // В задании 3 переделал на методы insertRow(), insertCell() и т.п., но здесь решил оставить так.
  // Там у нас есть insertCell() для вставки td, но нативного метода для вставки th нет. 
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
      content += `<td>${value}</td>`;
    });
    content += "</tr>";
    this._table.insertAdjacentHTML('beforeend', content);
  }

  fill(elements) {
    // Доверимся предположению, что элементы имеют одну и ту же структуру, и создадим заголовок по ключам первого элемента
    this.addHeader(elements[0]);

    // Заполним ряды таблицы элементами
    elements.forEach(element => {
      this.addRow(element);
    });
  }
}