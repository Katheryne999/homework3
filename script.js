const numberValueFirst = +prompt(' please enter first number');
const numberValueSecond = +prompt('please enter second number');
const firstOperand = prompt ('please enter your number');
const operationName = prompt('please enter operation');
console. log(typeof numberValueFirst);
console. log(typeof numberValueSecond);
if(operationName == 'sum'){
    const sum = +numberValueFirst + numberValueSecond;
    alert('sum' + sum);
    console. log('sum' + sum);
}else if(operationName == 'diff'){
    const diff = numberValueFirst - numberValueSecond;
    alert('diff' + diff);
    console. log('diff' + diff); 
}else if(operationName == 'mult'){
    const mult = numberValueFirst * numberValueSecond;
    alert('mult' + mult);
    console. log('mult' + mult);
}else if(operationName == 'div'){
    const div = numberValueFirst / numberValueSecond;
    alert('div' + div);
    console. log('div' + div);
}else if(operationName == 'cos'){
    const cos = Math.cos(firstOperand);
    alert('cos' + cos);
    console. log('cos' + cos);
}else if(operationName == 'sin'){
        const cos = Math.sin(firstOperand);
        alert('sin' + sin);
        console. log('sin' + sin);
}else if(operationName == 'sin'){
    const cos = Math.sin(firstOperand);
    alert('sin' + sin);
    console. log('sin' + sin);
}else if(operationName == 'pow'){
    const cos = Math.pow(firstOperand);
    alert('pow' + pow);
    console. log('pow' + pow);
}










