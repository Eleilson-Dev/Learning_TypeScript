// Tipos basicos
let age: number = 5;
const fistName: string = 'Elleylson';
const isValid: boolean = true;

const ids: number[] = [1, 2, 3, 4];
const booleans: boolean[] = [true, false, true, false];
const strings: string[] = ['Elleylson', 'santtos'];

// Tupla
const person: [number, string] = [1, 'Eleilson'];

// Lista de tuplas
export const people: [number, string][] = [
  [1, 'str1'],
  [2, 'str2'],
  [3, 'str3'],
];

// Intersections
const produtcId: string | number = '1';

// Enum
enum Direction {
  Up = 1,
  Down = 2,
}
