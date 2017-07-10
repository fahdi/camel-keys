import test from 'ava';
import camel from '.';

test('main', t => {
	t.true(camel({'foo-bar': true}).fooBar);
});

test(t => {
    t.deepEqual([1, 2], [1, 2]);
});

test('deep', t => {
	console.log(camel({'foo-bar': true, nested: {unicorn_rainbow: true}}, true));
	t.deepEqual(camel({'foo-bar': true, nested: {unicorn_rainbow: true}}, true), {fooBar: true, nested: {unicornRainbow: true}});
});
