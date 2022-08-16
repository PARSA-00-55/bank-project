//step 01 : add event handler to the withdraw button
const withdrawbutton = document.getElementById('withdraw-btn');
withdrawbutton.addEventListener('click', function(){
    //step-2 : get the value of withdraw input field  
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldSttring = withdrawField.value;
    const withdrawFieldAmount = parseFloat(withdrawFieldSttring);

    //step-7 : reset the value
    withdrawField.value = "";

    if(isNaN(withdrawFieldAmount)){
        alert('Please enter a amount');
        return;
    }
    
    //step-3 : get the current withdraw total
    const withdrawAmountFeild = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmountFeild.innerText;
    const previousWithdrawValue  = parseFloat(withdrawAmountString);


    //step-4 : add value to the total value

    const totalValue = document.getElementById('total-amount');
    const totalValueString = totalValue.innerText;
    const previousTotalvalue = parseFloat(totalValueString);

    if(withdrawFieldAmount > previousWithdrawValue){
        alert('Insufficient Balance');
        return;
    }

    //get the withdraw amount
    const withdrawAmount = withdrawFieldAmount + previousWithdrawValue;

    withdrawAmountFeild.innerText = withdrawAmount;

    //step-5 : get the current total balance 
    const totalBalance = previousTotalvalue - withdrawFieldAmount;

    totalValue.innerText = totalBalance;
    
})