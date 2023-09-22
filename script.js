console.clear()
let boxes = document.querySelectorAll(".a")
console.log(boxes[0].id)
let played = []
let k = 1
let pl = []
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
      played.push(this.id)
      if (k % 2 != 0) {

        for (let j = 0; j < boxes.length; j++) {
                if (!played.some(item => item == boxes[j].id)) {
                    boxes[j].classList.remove("a")
                    boxes[j].classList.add("b")
                }
              else if (played.filter(item=>item == this.id).length == 1) {                                              
            this.classList.remove("a")
            this.classList.add("cross")
            this.textContent = "❌"
              }
            }
        }
        else {

 
            for (let j = 0; j < boxes.length; j++) {
                if (!played.some(item => item == boxes[j].id)) {
                    boxes[j].classList.remove("b")
                    boxes[j].classList.add("a")
                }
              else if (played.filter(item=>item == this.id).length == 1){
            this.classList.remove("b")
            this.classList.add("zero")
            this.textContent = "🔵"
              }
            }

        }
        k ++
    }

    );

}

