const _ = require('lodash');

// Using playful naming based on "Alice the Camel" song:
// "horse" represents the input object, and "Alice" is her name. 
// Alice has no humps and she came to be transformed into a camel

module.exports = (horse, deep = false) => {
  // Function to transform object keys using a provided function
  const transformObjectKeys = (obj, transformFn) => _.mapKeys(obj, (value, key) => transformFn(key));

  // Recursively applies transformation to object keys
  const deeplyTransformObjectKeys = (obj, transformFn) => {
    return _.mapValues(obj, value => {
      return _.isPlainObject(value) ? deeplyTransformObjectKeys(value, transformFn) : value;
    });
  };

  // Function to transform a key to camelCase
  const transformKeyToCamelCase = key => _.camelCase(key);

  // If deep transformation is needed, use the deeplyTransformObjectKeys function
  if (deep) {
    return deeplyTransformObjectKeys(horse, transformKeyToCamelCase);
  } else {
    // If not, just transform the first-level keys
    return transformObjectKeys(horse, transformKeyToCamelCase);
  }
};
