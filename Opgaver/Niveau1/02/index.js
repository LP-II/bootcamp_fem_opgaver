function beregnForhold(a, b){
    return a / b;
    
}

console.log(beregnForhold(4, 3));

function beregnForhold2(a, b){
    if(b == 0){
        return null
    }else{
        return a / b;
    }
    
    
}

console.log(beregnForhold2(4, 3));
console.log(beregnForhold2(4, 0));