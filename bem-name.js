'use strict';

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
        var elem;
        var css;

        if (elemName) {
            if (elemName.charCodeAt(0) === 43) {
                var j = elemName.indexOf('.');

                if (j !== -1) {
                    elem = block + sepElem + elemName.substr(j + 1);
                    css = elemName.substr(0, j + 1) + elem;
                } else {
                    elem = block;
                    css = elemName + '.' + elem;
                };
            } else {
                elem = block + sepElem + elemName;
                css = elem;
            };
        } else {
            elem = block;
            css = elem;
        };

        var l = arguments.length;
        if (l < 2) {
            return css;
        };

        var clssList = [css];
        var elem_ = elem + sepMod;
        var i = 1;

        for (; i < l; i++) {
            var arg = arguments[i]
            if (!arg) {
                continue;
            };

            if (typeof arg === 'string') {
                clssList.push(arg);
                continue;
            };

            if (typeof arg === 'object') {
                if (isArray(arg)) {
                    arr(clssList, elem_, arg);
                    continue;
                };

                obj(clssList, elem_, arg);
                continue;
            };
        };

        return clssList.join(' ');
    };

    function obj(clssList, elem_, props) {
        for (var name in props) {
            var value = props[name];
            if (value === true) {
                clssList.push(elem_ + name)
                continue;
            };

            if (value || value === 0) {
                clssList.push(elem_ + name + sepVar + value);
            };
        };
    };

    function arr(clssList, elem_, a) {
        for (var i = 0, l = a.length; i < l; i++) {
            var x = a[i];
            if (!x) {
                continue;
            };

            if (typeof x === 'object') {
                if (isArray(x)) {
                    arr(clssList, elem_, x);
                } else {
                    obj(clssList, elem_, x);
                };
                continue;
            };

            if (typeof x === 'string') {
                clssList.push(x);
            };
        };
    };
};

