var conflate = require('./');
var test = require('tape');

test('conflate', function (t) {
  var point = { type: 'Point', coordinates: [100, 0.0] };
  var p1 = Object.assign({}, point, {
    properties: { count: 1, foo: 5 }
  });
  var p2 = Object.assign({}, point, {
    properties: { count: 3, bar: 7 }
  });
  var want = Object.assign({}, point, {
    properties: { bar: 7, count: 4, foo: 5 }
  });

  var got = conflate([p1, p2]);
  t.equal(p1.properties.count, 1, 'with no side effects');
  t.equal(got.properties.count, 3, 'by default overwriting props');
  t.false(got.properties.foo, 'does not retain props from first obj');

  got = conflate([p1, p2], function (memo, input) {
    var newProperties = Object.assign({}, memo.properties, input.properties, {
      count: memo.properties.count + input.properties.count
    });
    return Object.assign({}, memo, {
      properties: newProperties
    });
  });
  t.deepEqual(got, want, 'with a custom function to keep & sum props');

  t.end();
});
