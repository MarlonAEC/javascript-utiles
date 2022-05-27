import Queue from "../../DataStructures/Queue/queue";
import { Pair } from "../../@types/Pair";

const row = [0, -1, 0, 1];
const colum = [-1, 0, 1, 0];
let mSize = -1;
let nSize = -1;

const isInsideMatrix = (x, y) => {
  if (x < 0 || x > mSize) return false;
  if (y < 0 || y > nSize) return false;
  return true;
};

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var BFS = function (image, sr, sc, newColor) {
  mSize = image.length;
  nSize = image[0].length;
  let sol = image;
  let valueToAdd = image[sr][sc];
  sol[sr][sc] += valueToAdd;
  let Q = new Queue<Pair<number, number>>();

  Q.push({
    first: sr,
    second: sc,
  });

  while (!Q.isEmpty()) {
    let x: Pair<number, number> = Q.front();
    Q.pop();
    for (let i = 0; i < 4; i++) {
      if (
        isInsideMatrix(x.first + row[i], x.second + colum[i]) &&
        image[x.first + row[i]][x.second + colum[i]] === image[sr][sc]
      ) {
        Q.push({
          first: x.first + row[i],
          second: x.second + colum[i],
        });
        sol[x.first + row[i]] += valueToAdd;
      }
    }
  }
  console.log(sol);
  return sol;
};

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
let sr = 1;
let sc = 1;
let newColor = 2;

BFS(image, sr, sc, newColor);
