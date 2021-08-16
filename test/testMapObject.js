import { obj } from "./../dataset/dataset.js";
import mapObject from "../mapObject.js";
const cb = (element) => element + " New"; // cb function
const result = mapObject(obj, cb);
console.log(result);
