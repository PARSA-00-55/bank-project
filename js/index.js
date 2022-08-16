//add event handlar to the button
const button = document.getElementById('log-in-btn');
button.addEventListener('click', function(){
    //step-2 : get the email address from the email input field
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    //step-3 : get the password from the password from password input field
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    userEmailField.value = '';
    
    if(userEmail === 'admin@gmail.com' && userPassword === 'admin1234'){
        location.href = "bank-page.html";
    }else{
        alert('Email & password not matched')
    }
})