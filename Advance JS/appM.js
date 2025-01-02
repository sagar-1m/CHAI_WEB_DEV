// Module import file means that we can use the functions in other files by importing them. We can have multiple named imports but only one default import per file. The default import can be named anything when imported. The named imports must use the same name as the exported function name when imported. The default import is imported without curly braces and the named imports are imported with curly braces.

// default import
import multiply from "./mathOperationsM.js";

// default import  // no curly braces  // no need to use the same name as the exported function name // can be named anything  // can only have one default export per file

// named import
import { add, subtract } from "./mathOperationsM.js";

// named import  // curly braces  // must use the same name as the exported function name  // can have multiple named exports per file

console.log(multiply(3, 4)); // 12  // default import
console.log(add(3, 4)); // 7  // named import
console.log(subtract(3, 4)); // -1  // named import
