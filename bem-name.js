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

var SEP_ELEM = '__';
var SEP_MOD = '--';
var SEP_VAR = '-';

var isArray = Array.isArray;
module.exports = bem;


function bem(blockName) {
    var sepElem = SEP_ELEM;
    var sepMod = SEP_MOD;
    var sepVar = SEP_VAR;
    var block = '' + blockName;

    bemFun.setup = setup;
    return bemFun;

    function setup(_var, _mod, _elem) {
        sepElem = _elem || SEP_ELEM;
        sepMod = _mod || SEP_MOD;
        sepVar = _var || SEP_VAR;
        return bemFun;
    };

    function bemFun(elemName) {
        if (elemName) {
            if (elemName.charCodeAt(0) === 43) {
                var j = findIndexPoint(elemName);
                if (j !== -1) {
                    var elem = block + sepElem + elemName.substr(j + 1);
                    var css = elemName.substr(0, j + 1) + elem;
                } else {
                    var elem = block;
                    var css = elemName + '.' + elem;
                };
            } else {
                var elem = block + sepElem + elemName;
                var css = elem;
            };
        } else {
            var elem = block;
            var css = elem;
        };


        for (var i = 1, l = arguments.length; i < l; i++) {
            var x = arguments[i]
            if (!x) {
                continue;
            };

            if (typeof x === 'object') {
                css += isArray(x) ? arr(elem, x) : obj(elem, x);
                continue;
            };

            if (typeof x === 'string') {
                css += ' ' + x;
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

    function arr(elem, a) {
        var css = '';
        for (var i = 0, l = a.length; i < l; i++) {
            var x = a[i];
            if (!x) {
                continue;
            };

            if (typeof x === 'object') {
                css += isArray(x) ? arr(elem, x) : obj(elem, x);
                continue;
            };

            if (typeof x === 'string') {
                css += ' ' + x;
            };
        };

        return css;
    };
};

function findIndexPoint(s) {
    var length = +s.length;

    for(var i = 2; i < length; i++) {
        if (s.charCodeAt(i) !== 46) { // '.'
            continue;
        };
        return i;
    };

    return -1;
};

