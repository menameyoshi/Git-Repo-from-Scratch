// 3-1. flattening(list)
export function flattening(list) {
  return list.reduce((flat, array) => flat.concat(array), []);
}

// 3-2. loop(value, test, update, body)
export function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

// 3-3. everyLoop(array, test)
export function everyLoop(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true;
}

// 3-4. everySome(array, test)
export function everySome(array, test) {
  return !array.some((element) => !test(element));
}
