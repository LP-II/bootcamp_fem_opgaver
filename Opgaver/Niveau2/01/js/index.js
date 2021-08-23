var btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", ()=>{
        btn.forEach(e =>{
            e.classList.remove("glow");
            
            e.style.backgroundColor = "#333";
        })
        btn[i].classList.add("glow");
        btn[i].style.backgroundColor = "#fe1153";
    }) 
}