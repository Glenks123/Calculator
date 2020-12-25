var inputLabel = document.getElementById('inputLabel');

function buttonPushed(obj){
    var value = obj.innerHTML;
    
    if (value == '='){
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    }else if (value == 'AC'){
        inputLabel.innerHTML = '0';
    }else{
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = value;
        }else{
            inputLabel.innerHTML += value
        }
    }
}