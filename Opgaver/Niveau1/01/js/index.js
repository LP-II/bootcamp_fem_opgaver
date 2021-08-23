var myBtn = document.querySelector("#my-button");
var count = 1;
function setColor() {
    if (count == 0) {
        myBtn.style.backgroundColor = "#7f7"
        count = 1;        
    }
    else {
        myBtn.style.backgroundColor = "#eee"
        count = 0;
    }
}
myBtn.addEventListener("click", ()=>{
    setColor();
});