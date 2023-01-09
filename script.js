let buttons = document.querySelectorAll('.button');
let inputString = "";

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'X²'){
            inputString += "**2";
            document.querySelector('input').value = inputString;
        }
        else if(e.target.innerHTML == 'Del'){
            inputString = inputString.slice(0,-1);
            document.querySelector('input').value = inputString
        }
        else if(e.target.innerHTML == '='){
            inputString = eval(inputString);
            document.querySelector('input').value = inputString
        }
        else if(e.target.innerHTML == 'AC'){
            inputString = "";
            document.querySelector('input').value = inputString;
        }
        else{
            console.log(e.target);
            inputString = inputString + e.target.innerHTML;
            document.querySelector('input').value = inputString;
        }
        
    })
})