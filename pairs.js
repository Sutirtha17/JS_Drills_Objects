export default function pairs(obj) {
  let pairs = [];
  for (let key in obj) {
    pairs.push([key, obj[key]]);
  }
  return pairs;
}
