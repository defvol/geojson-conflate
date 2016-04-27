module.exports = function (features, customizer) {
  return features.reduce(function(memo, curr) {
    if (customizer) return customizer(memo, curr);
    return Object.assign({}, memo, curr);
  })
};
