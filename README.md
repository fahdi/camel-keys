# JSON camelKeys

Convert object keys to camelCase using [`camelcase`](https://github.com/fahdi/camel-keys)


## Install

```bash
npm install camel-keys --save 
```

```bash
yarn add camel-keys
```

## Usage

```js
const camelKeys = require('camel-keys');

camelKeys({'foo-bar': true});
//=> {fooBar: true}

camelKeys({'foo-bar': true, nested: {unicorn_rainbow: true}}, false);
//=> {fooBar: true, nested: {unicorn_rainbow: true}}

camelKeys({'foo-bar': true, nested: {unicorn_rainbow: true}}, true);
//=> {fooBar: true, nested: {unicornRainbow: true}}
```


## API

### camelKeys(input, deep)

##### input

Type: `Object`

Object to camelCase.

##### deep

Type: `boolean`<br>
Default: `false`

Recurse nested objects and objects in arrays.

## License

MIT © [Fahad Murtaza](http://www.fahdmurtaza.com)
