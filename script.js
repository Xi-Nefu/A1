window.onload = () => {
  generateBox();
};


function generateBox() {
  let left = 0;
  let top = 0;
  let colors = ["Brown", "DarkCyan", "DarkGrey", "DarkMagenta", "Gold","Coral","Turquoise"];
  for (let i = 1; i <= 100; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = colors[Math.floor(Math.random() * 5)];
    box.style.top = top + "px";
    box.style.left = left + "px";
    box.addEventListener("mouseover", removeBox);
    $("#container").append(box);
    left += Math.floor(Math.random() * 90) + 20; 
    if (i % 10 === 0) {
      left = 0;
      top += Math.ceil(Math.random() * 70) + 20;
    }
  }
}

function reGenerateBox(){
  if(document.querySelectorAll(".box").length === 0){
    generateBox();
  }
}

function removeBox() {
  $(this).remove();
  reGenerateBox();
}

$("div.box").on("mouseover", removeBox);
