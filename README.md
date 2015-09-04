bem-name
==================================================
простой и быстрый генератор класса(html) в стиле BEM

Пример использования
--------------------------------------
```js
var mix = 'myForm__button';
var b = bem('myButton');

var x = b(); // myButton
var x = b('icon'); // myButton__icon
var x = b('icon', mix
    , 'x-glob-xxxx'
    , ['-open', true]
    , ['-size', 14]
    , {
        type: 'red',
        show: true
    }
);
// 'myButton__icon myButton__icon--type-red myButton__icon--show -size-14 -open x-glob-xxxx myForm__button'
```

