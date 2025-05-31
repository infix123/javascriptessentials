function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if(!isNaN(num1) && !isNaN(num2)){
        let result = multiply(num1, num2);

        display(result)
    }else{
        displayResult("please entere valid numbers")
    }

}

function multiply(a,b){
    debugger;

    return a * b;
}

function displayResult(result){
    const resultElement = document.getElementById('result');
    result.textContent = `The result is : ${result}`;
}