
let FirstName = document.querySelector('#name')
let FirstNameError = document.querySelector('#FNerror')

let LastName = document.querySelector('#LastName')
let LastNameError = document.querySelector('#LNerror')

let email = document.querySelector('#email')
let EmailError = document.querySelector('#EmailError')

let password = document.querySelector('#password')
let PasswordError = document.querySelector('#SenhaErro')

function FN() {
    
    if(FirstName.value == '') {
        FirstName.style.border = '1px solid hsl(0, 100%, 74%)'
        FirstName.style.background = 'url(./images/icon-error.svg) no-repeat right'
        FirstNameError.innerText = ' First Name cannot be empty'
    }
     else { 
        return
    }
}


function LN() {
    if(LastName.value == '') {
        LastName.style.border = '1px solid hsl(0, 100%, 74%)'
        LastName.style.background = 'url(./images/icon-error.svg) no-repeat right'
        LastNameError.innerText = ' Last Name cannot be empty'
    }
     else { 
        return
    }
}

function address() {
    
    if(email.value == '') {
        email.style.border = '1px solid hsl(0, 100%, 74%)'
        email.style.background = 'url(./images/icon-error.svg) no-repeat right'
        email.style.color = 'hsl(0, 100%, 74%)'
        email.value = 'email@exemple/com'
        EmailError.innerText = 'Looks like this is not an email'
    }
     else { 
        return 
    }
}

function senha() {
   
    if(password.value == '') {
        password.style.border = '1px solid hsl(0, 100%, 74%)'
        password.style.background = 'url(./images/icon-error.svg) no-repeat right'
        PasswordError.innerText = 'Password cannot be empty'
    }
     else { 
        return
    }
}

function teste() {
    FN()
    LN()
    address()
    senha()

    if (FN(), LN(), address(), senha() == false){
        return console.log('Você se cadastrou')
    } else  {
        return console.log('deu erro')
    }
}
