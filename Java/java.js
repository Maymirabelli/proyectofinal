class Personas {
    constructor(pName, pLastName, pEmail, pPhone) {
        this.name = pName;
        this.lastName = pLastName;
        this.email = pEmail;
        this.phone = pPhone;
        
    }
}

function validar(){
    let contactformage = document.getElementById("age").value;
    if (contactformage <= 18){
        alert("You must be over 18 years of age to send this form");
        datosOk = false;
        
    }
    else if (isNaN(contactformage) || contactformage == ""){
        alert ("You must enter your age to be able to validate the submission of the form")
        datosOk = false
    }
    else{
        datosOk = true;
    }
}