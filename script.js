console.clear();

let matrix = [
  [8, 8, 8],
  [8, 8, 8],
  [8, 8, 8]
];

let boxes = document.querySelectorAll(".a");
console.log(boxes[0].id);
let played = [];
let count = 1;
let pl = [];
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    if (played.filter((item) => item == this.id).length == 0) {
      played.push(this.id);
      if (count % 2 != 0) {
        for (let j = 0; j < boxes.length; j++) {
          if (!played.some((item) => item == boxes[j].id)) {
            boxes[j].classList.remove("a");
            boxes[j].classList.add("b");
          } else {
            this.classList.remove("a");
            this.classList.add("cross");
            this.textContent = "❌";
            let posX =
              this.id % 3 == 0
                ? Math.trunc(this.id / 3) - 1
                : Math.trunc(this.id / 3);
            let posY = this.id % 3 == 0 ? 2 : (this.id % 3) - 1;
            matrix[posX][posY] = 1;
          }
        }
      } else {
        for (let j = 0; j < boxes.length; j++) {
          if (!played.some((item) => item == boxes[j].id)) {
            boxes[j].classList.remove("b");
            boxes[j].classList.add("a");
          } else {
            this.classList.remove("b");
            this.classList.add("zero");
            this.textContent = "🔵";
            let posX =
              this.id % 3 == 0
                ? Math.trunc(this.id / 3) - 1
                : Math.trunc(this.id / 3);
            let posY = this.id % 3 == 0 ? 2 : (this.id % 3) - 1;
            matrix[posX][posY] = 0;
          }
        }
      }

      let diagonals = [[], []];
      let k = matrix.length - 1;
      let n = 0;
      let columns = [];
      for (let i = 0; i < matrix.length; i++) {
        columns.push([]);
      }
      console.log(columns);

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (i == j) diagonals[n].push(matrix[i][j]);
        }
      }
      console.log(diagonals);

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (j == k) diagonals[1].push(matrix[i][j]);
        }
        k--;
      }
      console.log(diagonals);

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (i == n) columns[n].push(matrix[j][i]);
        }
        n++;
      }
      console.log(columns);

      function check(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].every((item) => item == 0)) {
            return 0;
            break;
          } else if (arr[i].every((item) => item == 1)) {
            return 1;
            break;
          } else {
            if (i == arr.length - 1) return false;
          }
        }
      }

      let results = [check(matrix), check(diagonals), check(columns)];

      if (results.join(" ").includes("0")) alert("Виграв 2 гравець!");
      else if (results.join(" ").includes("1")) alert("Виграв 1 гравець!");
      else {
        if (count == 9) alert("Нічия!");
      }

      count++;
      console.log(matrix);
    }
  });
}
