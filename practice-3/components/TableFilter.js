class TableFilter {
  constructor(selectorTable, selectorInput, minChars = 3) {
    this._table = document.querySelector(selectorTable);
    this._input = document.querySelector(selectorInput);
    this._minChars = minChars;
  }

  _filterRows() {
    // Получаем поисковый запрос
    let searchString = this._input.value;

    this._rows.forEach((row) => {
      // Создаем массив из каждой строки таблицы
      let arrayFilter = Array.from(row.cells).map(cell => cell.innerText);

      // Если массив содержит искомую строку (или она пустая), ставим строке display: table-row, иначе display: none
      let display = (searchString.length < this._minChars || arrayFilter.findIndex(element => element.includes(searchString)) > 0) ?
        'table-row' : 'none';
      row.style.display = display;
    });
  }
  
  enableFilter() {
    this._tableBody = this._table.querySelector('tbody');
    this._rows = this._tableBody.querySelectorAll('tr');
    let timer = null;

    // Ставим слушателя на изменение текстового инпута с небольшой задержкой
    this._input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this._filterRows();
      }, 500);
    });
  }
}