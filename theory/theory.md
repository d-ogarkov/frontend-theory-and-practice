# Теория

## Что выводит данный код?

```
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

Вывод в консоль:

```
Bad: undefined
Bad: undefined
Bad: undefined
Bad: undefined
```

Значение i по окончании цикла равняется 4, оно и достанется всем вызовам функции по setTimeout. Но элемента с таким индексом в массиве нет.

## Как исправить?

Вот два варианта, которые дадут ожидаемый вывод `Bad: 10, Bad: 12, Good: 15, Good: 21`.

### Вариант 1

Заменить `var` на `let`:

```
for (let i = 0; i < arr.length; i++) {
  // ...
}
```

### Вариант 2

Вынести установку задержки в отдельную функцию и передавать ей индекс в цикле, чтобы получить нужное нам замыкание:

```
const arr = [10, 12, 15, 21];

const postpone = (j) => {
  setTimeout(() => {
    console.log(arr[j] > 13 ? `Good: ${arr[j]}` : `Bad: ${arr[j]}`)
  }, 300)
}

for (var i = 0; i < arr.length; i++) {
  postpone(i)
}
```
