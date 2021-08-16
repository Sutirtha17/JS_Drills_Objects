import { obj } from "./../dataset/dataset.js";
import defaults from "../defaults.js";
const defaultProps = { weight: "80Kg", age: 40, sex: "Male" }; // test object
const result = defaults(obj, defaultProps);
console.log(result);
