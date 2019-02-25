bem-name
==================================================
a simple and quick generator of the class(html) in the style of BEM

Install
---------------------------------------------------
```
$ npm install bem-name
```

Example of use
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

