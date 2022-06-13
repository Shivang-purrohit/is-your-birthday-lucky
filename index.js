const dateInput = document.querySelector("#date-input")
const luckyNum = document.querySelector("#lucky-num")
const btnClick = document.querySelector("#btn-click")
const showMsg = document.querySelector("#show-msg")

function compareValue(sum,luckyNum){
    if(sum%luckyNum==0){
        showMsg.innerText="your birthday is lucky 😍";
    }else{
        showMsg.innerText="your birthday is not lucky 😔";
    }
}
    

function checkBirthDateIsLucky(){
    const dob = dateInput.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
   compareValue(sum,luckyNum.value)
     } else{
   showMsg.innerText="please enter both the fields 😠";
     }
}

function calculateSum(dob){
    dob = dob.replaceAll("-", "")
    let sum = 0
    for(let index=0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}







btnClick.addEventListener('click' , checkBirthDateIsLucky);
