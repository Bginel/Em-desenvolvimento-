
let FirstName = document.querySelector('#name')
let FirstNameError = document.querySelector('#FNerror')

let LastName = document.querySelector('#LastName')
let LastNameError = document.querySelector('#LNerror')

let email = document.querySelector('#email')
let EmailError = document.querySelector('#EmailError')

let password = document.querySelector('#password')
let PasswordError = document.querySelector('#SenhaErro')

var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;


function FN() {
    
    if(FirstName.value == '') {
        FirstName.style.border = '2px solid hsl(0, 100%, 74%)'
        FirstName.style.background = 'url(./images/icon-error.svg) no-repeat right'
        FirstNameError.innerText = ' First Name cannot be empty'
    }
     else { 
        return
    }
}


function LN() {
    if(LastName.value == '') {
        LastName.style.border = '2px solid hsl(0, 100%, 74%)'
        LastName.style.background = 'url(./images/icon-error.svg) no-repeat right'
        LastNameError.innerText = ' Last Name cannot be empty'
    }
     else { 
        return
    }
}

function address(E) {

    if( email.value == '') {
        email.style.border = '2px solid hsl(0, 100%, 74%)'
        email.style.background = 'url(./images/icon-error.svg) no-repeat right'
        email.placeholder = 'email@exemple/com'
        EmailError.innerText = 'Looks like this is not an email'
    }
     else { 
        return 
    }
}

function senha() {
   
    if(password.value == '') {
        password.style.border = '2px solid hsl(0, 100%, 74%)'
        password.style.background = 'url(./images/icon-error.svg) no-repeat right'
        PasswordError.innerText = 'Password cannot be empty'
    }
     else { 
        return
    }
} 


function validateEmail(){
   
       if (reg.test(email.value) == false){
            email.style.border = '2px solid hsl(0, 100%, 74%)'
            email.style.background = 'url(./images/icon-error.svg) no-repeat right'
            EmailError.innerText = 'Looks like this is not an email';
        }
        else{
            return;
       }
}


 function teste() {
    FN()
    LN()
    address()
    validateEmail()
    senha()


    if (FirstName.value == '' || LastName.value == '' || email.value == '' || password.value == '' || reg.test(email.value) == false){
        return
    } else  {
        alert('Parabéns pelo cadastro!')
        window.location.reload()
    } 

}
