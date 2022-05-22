// 1. Please write a function that shows the usage of closures
function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}
let sayHi = greeting("Hi");
let sayHello = greeting("Hello");

console.log(sayHi("Matt"));
console.log(sayHello("Jennifer"));

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

function arraySum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) sum += array[index];

  return sum;
}

let array = [9, 3, 5, 7, 8];
console.log(arraySum(array));

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]
function flattenArrray(array) {
  let flatValues = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      const result = flattenArrray(element);
      result.forEach((element) => flatValues.push(element));
    } else {
      flatValues.push(element);
    }
  });
  return flatValues;
}

const input = [[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5];
const output = flattenArrray(input);

console.log(output);

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
const array1 = ["b", 3, 4, 76, "c"];
const array2 = ["a", "b", 4, 76, 21, "e"];

const filterCommonArray = array1.filter((value) => array2.includes(value));

console.log(filterCommonArray);

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const filterDiff2Array = array2.filter((value) => !array1.includes(value));
const filterDiff1Array = array1.filter((value) => !array2.includes(value));

const DifferentElements = [...filterDiff1Array, ...filterDiff2Array];
console.log(DifferentElements);

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]
//unzip
const tuples = (arr) =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map((x) => x.length))
    }).map((x) => [])
  );

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6, 7];

console.log(tuples([arr1, arr2]));

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'
const get = function (obj, path, def) {
  let current = obj;
  // For each item in the path, dig into the object
  for (let i = 0; i < path.length; i++) {
    // If the item isn't found, return the default (or null)
    if (!current[path[i]]) return def;

    // Otherwise, update the current  value
    current = current[path[i]];
  }
  return current;
};

const obj = { a: { b: { c: { d: "23" } } } };
let getPath = get(obj, ["a", "b", "c", "d"]);

console.log(getPath);
// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
let a = { a: "b", c: "d" };
let b = { c: "d", a: "b" };

let c = { a: "c", c: "a" };
let d = { c: "d", a: "b", q: "s" };

function compareObj(x, y) {
  console.log(
    Object.entries(x).sort().toString() === Object.entries(y).sort().toString()
  );
}

compareObj(a, b);
compareObj(c, d);

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
function getValueByKey() {
  const keys = Object.keys(object);
  const values = Object.values(value);
  const arrNew = keys.filter((value) => !values.includes(value));

  arrNew.forEach((key, index) => {
    console.log(`${key}: ${object[key]}`);
  });
}
let object = { color: "Blue", id: "22", height: "180", size: "xl" };
let value = ["color", "size"];

getValueByKey(object, value);
