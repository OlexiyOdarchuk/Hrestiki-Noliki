let boxes = document.querySelectorAll(".box");
console.log(boxes);
for(let i=0;i<boxes.length; i++){
    boxes[i].addEventListener("click",click)
}

function click() {
    boxes[5].classList.add("cross")
}