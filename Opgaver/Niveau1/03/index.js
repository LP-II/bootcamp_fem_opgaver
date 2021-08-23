function hideStuff(cssSelector) {
    var items = document.querySelectorAll(".div-1, .div-2, .div-3, .div-4");
    for (let index = 0; index < items.length; index++) {
        if(cssSelector == ".div-1"){
        items[0].style.display = "none";
    }else if(cssSelector == ".div-2"){
        items[1].style.display = "none";
    }else if(cssSelector == ".div-3"){
        items[2].style.display = "none";
    }else if(cssSelector == ".div-4"){
        items[3].style.display = "none";
    }else{
        return null;
    }
}
}

console.log(hideStuff(".div-1"));