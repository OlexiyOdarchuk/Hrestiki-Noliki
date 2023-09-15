let boxes = document.querySelectorAll(".box");
console.log(boxes);
for(let i=0;i<boxes.length; i++){
    boxes[i].addEventListener("click",click)
}

let button = document.querySelector("button")
button.setAttribute("disabled", "")

function click() {
    this.classList.remove("box")
    this.classList.add("cross")
    
}