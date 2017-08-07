var assert = require('assert');
var bem = require('../bem-name.js');

describe('test-01', function() {
    var b = bem('MyBlock');
    it('создание b()', function() {
        assert.equal('function', typeof b);
    });

    it('результат typeof string', function() {
        assert.equal('string', typeof b());
    });

    it('создание корневого элемента', function() {
        assert.equal('MyBlock', b(''));
    });

    it('создание элемента', function() {
        assert.equal('MyBlock__button', b('button'));
    });

    it('тег корня', function() {
        assert.equal('+div.MyBlock', b('+div'));
    });

    it('тег элемента', function() {
        assert.equal('+div.MyBlock__button', b('+div.button'));
    });

    it('модификатор через обьект', function() {
        assert.equal('MyBlock__button MyBlock__button--size-large'
            , b('button', {size: 'large'})
        );
    });

    it('модификатор через строку', function() {
        assert.equal('MyBlock__button -size-large'
            , b('button', '-size-large')
        );
    });

    it('несколько модификаторов', function() {
        assert.equal('MyBlock__button MyBlock__button--size-large -focus'
            , b('button', {size: 'large'}, '-focus')
        );
    });

    it('несколько модификаторов', function() {
        assert.equal('MyBlock__button MyBlock__button--size-large -focus'
            , b('button', {size: 'large'}, '-focus')
        );
    });

    it('список модификаторов', function() {
        assert.equal('MyBlock__button MyBlock__button--size-large -focus -hover'
            , b('button', [{size: 'large'}, '-focus',,, [,,'-hover']])
        );
    });

    it('настройка разделителей', function() {
        var b = bem('MyBlock').setup('~', '~~', '-');
        assert.equal('MyBlock-button MyBlock-button~~size~large'
            , b('button', {size: 'large'})
        );
    });

});

describe('test-speed', function() {
    it('speed: ' + speed(), function() {
        assert.equal(1, 1);
    });
});

function speed() {
    var b = bem('MyBlock');
    var mix = 'kjdfgkj dskfgs kldf sldjkhgsdg sdlkj';

    function test() {
        return b('icon'
            , 'x-glob-xxxx'
            , {type: 'red', show: true}
            , {index: i}
            , [{a: 1}, {b: 2}, {c: 3}]
            , mix
        );
    };

    for(var i = 100; i--; ) {
        test(i);
    };

    var i = 100000;
    var t = +new Date();
    var s = '';
    while(i--) {
        s += test(i);
    };

    return +new Date() - t;
};