export default function invert(obj) {
  let invertedObject = {};
  for (let key in obj) {
    let newKey = obj[key];
    let newValue = key;
    invertedObject[newKey] = newValue;
  }
  return invertedObject;
}
