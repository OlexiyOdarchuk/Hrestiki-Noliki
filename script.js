
let boxes = document.querySelectorAll(".a")
let played = []
let k=1
let pl = []
for(let i = 0; i<boxes.length; i++){
  
  if(k%2!=0){
    boxes[i].addEventListener("click", function() {
      this.classList.remove("a")
      this.classList.add("cross")
      this.textContent = "❌"
      played.push(this.id)
    for(let j = 0; j<boxes.length-1; j++){
      if (played.every(item => item != boxes[j])){
        boxes[j].classList.remove("a")
         boxes[j].classList.add("b")
      }
    }
  });
  }
  else{
    boxes[i].addEventListener("click", function() {
      this.classList.remove("a")
      this.classList.add("zero")
      this.textContent = "🔵"
  });
  }
  k+=1
}