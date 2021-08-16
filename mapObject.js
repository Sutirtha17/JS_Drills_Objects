export default function mapObject(obj, cb) {
  let mapObject = {};
  for (let key in obj) {
    mapObject[key] = cb(obj[key]);
  }
  return mapObject;
}
