//step-1 : add event handler with the deposit button
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function(){
    //step-2 : get the deposit input field value
    const depositFiledElement = document.getElementById('deposit-field');
    const depositFiledstring = depositFiledElement.value;
    const depositField = parseFloat(depositFiledstring);

    //step-7 : reset the vlaue after input
    depositFiledElement.value = '';

    if(isNaN(depositField)){
        alert('Please enter a amount');
        return;
    }

    //step-3 : get the current deposit total
    const currentDepositAmout = document.getElementById('deposit-amount');
    const depositAmountString = currentDepositAmout.innerText;
    const previousDepositValue = parseFloat(depositAmountString);
    
    const totalDepositValue = depositField + previousDepositValue;

    currentDepositAmout.innerText = totalDepositValue;

    const totalamount = document.getElementById('total-amount');
    const totalamountstring = totalamount.innerText;
    const totalAmountValue = parseFloat(totalamountstring);

    const totalAmount = totalAmountValue + depositField;

    totalamount.innerText = totalAmount;

})