// Exporting modules means that we can use the functions in other files by importing them. We can have multiple named exports but only one default export per file. The default export can be named anything when imported. The named exports must use the same name as the exported function name when imported. The default export is imported without curly braces and the named exports are imported with curly braces.

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}
