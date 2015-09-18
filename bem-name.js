'use strict';
/*
    var mix = 'myForm__button';
    var b = bem('myButton');

    var x = b('icon', mix
        , 'x-glob-xxxx'
        , ['-open', true]
        , ['-size', 14]
        , {
            type: 'red',
            show: true
        }
    );

    // x === 'myButton__icon myButton__icon--type-red myButton__icon--show -size-14 -open x-glob-xxxx myForm__button'
*/

var isArray = Array.isArray;
exports = bem;


function bem(blockName, sepType) {
    var sepMod = sepType === '_' ? '_' : (sepType === '~' ? '~~' : '--');
    var sepVar = sepType === '_' ? '_' : '-';
    var block = '' + blockName;
    return bemFn;

    function bemFn(elemName) {
        var elem = elemName ? block + '__' + elemName : block;
        var css = elem;

        var i = arguments.length, x;
        while(--i > 0) {
            if (x = arguments[i]) {
                if (typeof x === 'object') {
                    css += isArray(x) ? arr(x) : obj(elem, x);
                    continue;
                };

                if (typeof x === 'string') {
                    css += ' ' + x;
                };
            };
        };

        return css;
    };

    function obj(elem, props) {
        var css = '';

        for (var name in props) {
            var v = props[name];
            if (v === true) {
                css += ' ' + elem + sepMod + name;
            } else if (v || v === 0) {
                css += ' ' + elem + sepMod + name + sepVar + v;
            };
        };

        return css;
    };

    function arr(a) {
        var v = a[1];

        if (v === true) {
            return ' ' + a[0];
        } else if (v || v === 0) {
            return ' ' + a[0] + sepVar + v;
        };

        return '';
    };


};

