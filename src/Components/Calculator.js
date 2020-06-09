function Sum(a, b){
    let sum = a + b;
    return sum;
}

function Subtract(a, b){
    let sub = a - b;
    return sub;
}

function Multiply(a, b){
    let mul = a * b;
    return mul;
}

function Division(a, b){
    let div = a/b;
    div = div.toFixed(2);
    return div;
}

export default Sum;

export {Subtract, Multiply, Division};

