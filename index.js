const _ = require('lodash');

module.exports = (horse, deep) => {
  deep = deep || false;
  let alice = {};

  _.mixin({
    deeply: map => {
      return (obj, fn) => {
        return map(_.mapValues(obj, v => {
          return _.isPlainObject(v) ? _.deeply(map)(v, fn) : v;
        }), fn);
      }
    },
  });

  if (deep) {
    alice = _.deeply(_.mapKeys)(horse, (val, key) => {
      return _.camelCase(key);
    });

  } else {
    _.each(horse, (value, key) => {
      key = _.camelCase(key) || key;
      alice[key] = value;
    });
  }

  return alice;
}
