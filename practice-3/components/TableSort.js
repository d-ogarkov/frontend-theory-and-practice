class TableSort {
  constructor(selectorTable) {
    this._table = document.querySelector(selectorTable);
  }
  
  // Своя функция сравнения для сортировки массива
  _compare(row1, row2, index, sortDirectionSign = 1) {
    const value1 = row1.querySelectorAll('td')[index].innerHTML;
    const value2 = row2.querySelectorAll('td')[index].innerHTML;

    // Если это числа, сравним их как числа
    if (Number(value1) && Number(value2)) {
      return (value1 - value2) * sortDirectionSign;
    }

    // Иначе как строки
    if (value1 > value2) {
      return 1 * sortDirectionSign;
    }
    if (value1 < value2) {
      return -1 * sortDirectionSign;
    }
    return 0;
  }

  _sortColumn(event, index) {
    const columnOld = this._table.querySelector('th[data-sort]');
    const columnNew = this._table.querySelectorAll('th')[index];

    // Если была сортировка по возрастанию, то выбираем по убыванию. По умолчанию выбираем по возрастанию
    const sortDirection = columnNew.dataset.sort ?
      (columnNew.dataset.sort == 'inc' ? 'dec' : 'inc')
      : 'inc';

    // Сохраняем ее в дата-атрибуте заголовка
    columnNew.dataset.sort = sortDirection;

    // Убираем предыдущий дата-атрибут столбца, по которому сортировали (если он есть и это не текущий столбец)
    if (columnOld && columnOld !== event.currentTarget) delete columnOld.dataset.sort;

    // Если сортировка по возрастанию (inc), используем множитель 1, а если dec, то -1 (результат сортировки будет обратным)
    const sortDirectionSign = (sortDirection == 'inc' ? 1 : -1);

    // Создадим копию строк таблицы
    const newRows = Array.from(this._rows);

    // Сортируем своей функцией
    newRows.sort((row1, row2) => this._compare(row1, row2, index, sortDirectionSign));

    // Старые строки удаляем
    this._rows.forEach((row) => {
      this._tableBody.removeChild(row);
    });

    // Новые добавляем
    newRows.forEach((newRow) => {
      this._tableBody.appendChild(newRow);
    });
  }

  // Включает сортировку по клику на заголовки
  enableSorting() {
    this._tableBody = this._table.querySelector('tbody');
    this._rows = this._tableBody.querySelectorAll('tr');

    const headers = this._table.querySelectorAll('th');

    headers.forEach((header, index) => {
      header.addEventListener('click', (event) => {
        this._sortColumn(event, index);
      });
    });
  }  
}