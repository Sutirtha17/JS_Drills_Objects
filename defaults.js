export default function defaults(obj, obj2) {
  for (let key in obj2) {
    if (obj[key] == undefined) obj[key] = obj2[key];
  }
  return obj;
}
