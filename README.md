[![Build Status](https://travis-ci.org/rodowi/geojson-conflate.svg?branch=master)](https://travis-ci.org/rodowi/geojson-conflate)

# geojson-conflate

Custom merge of GeoJSON features.

```javascript
// pseudo-code (see test.js)
conflate(nearbyEvents, (accum, curr) => {
  let attendees = accum.attendees + curr.attendees
  let cluster = (accum.centroid + curr.centroid) / 2
  return accum + { attendees, cluster }
})
```
