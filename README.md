bem-name
==================================================
простой и быстрый генератор класса(html) в стиле BEM

Install
---------------------------------------------------
```
$ npm install bem-name
```

Пример использования
--------------------------------------
```js
var mix = 'myForm__button';
var b = bem('myButton');

var x = b(); // myButton
var x = b('icon'); // myButton__icon
var x = b('icon'
    , {
        type: 'red',
        show: true
    }
    , ['-open', {size: 14}]
    , 'x-glob-xxxx'
    , mix
);
// 'myButton__icon myButton__icon--type-red myButton__icon--show -open myButton__icon--size-14 x-glob-xxxx myForm__button'
```

