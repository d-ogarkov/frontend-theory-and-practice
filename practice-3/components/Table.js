class Table {
  constructor(selectorTable) {
    this._table = document.querySelector(selectorTable);
    this._tableHead = this._table.createTHead(); // thead element
    this._tableBody = this._table.createTBody(); // tbody element
  }

  // Добавляет в таблицу строку заголовков по ключам переданного элемента
  addHeader(element) {
    const rowHeader = this._tableHead.insertRow();

    // Здесь не используем insertCell, потому что она вставляет только td, а нам нужно th
    Object.keys(element).forEach((key) => {
      let th = document.createElement('th');
      th.innerHTML = key;
      rowHeader.appendChild(th);
    });
  }

  // Добавляет в таблицу строку данных
  addRow(element) {
    const rowData = this._tableBody.insertRow();

    Object.keys(element).forEach((key) => {
      rowData.insertCell().innerText = element[key];
    });
  }

  // Заполняет таблицу данными, используя addRow
  fill(elements) {
    this.addHeader(elements[0]);

    // Заполним ряды таблицы значениями элементов
    elements.forEach(element => {
      this.addRow(element);
    });
  }

  // Фиксирует ширину колонок по первому автоматическому лэйауту, чтобы не скакали при фильтрации
  fixWidth() {
    const headers = this._tableHead.querySelectorAll('th');
    headers.forEach(header => {
      header.style.width = header.offsetWidth + 'px';
    })
  }
}