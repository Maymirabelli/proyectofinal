//* CONSTRUCTOR DE PERSONAS 

class People {
    constructor(pName, pAge, pEmail, pPhone) {
        this.name = pName;
        this.age = pAge;
        this.email = pEmail;
        this.phone = pPhone;
        
    }
}

//* FUNCION DE VALIDACION DE EDAD DESDE EL FORMULARIO

function validar(){
    let  containerformage= document.getElementById("age").value;
    if (containerformage <= 18){
        alert("You must be over 18 years of age to complete this form");
        datosOk = false;
        
    }
    else if (isNaN(containerformage) || containerformage == ""){
        alert ("You must complete the age field to submit the form")
        datosOk = false
    }
    else{
        datosOk = true;
    }
}

//* FUNCION DE CARGA DE DATOS DEL FORMULARIO

function userLoader (e) {
    e.preventDefault
    validar()
    if (datosOk) {
        let confirmData = confirm ("Do you want to send the data?")
        if (confirmData){
            let pName = document.getElementById("name").value
            let pAge = document.getElementById("age").value
            let pEmail = document.getElementById("email").value
            let pPhone = document.getElementById("phone").value
            
            let user = new People (pName, pAge, pEmail, pPhone)
            peopleList.push(user)
                         
        }
        else {
            alert ("No data entered. You must complete the entire form")
        }
    }

    
}

let peopleList = []



$("#button").on ("click", userLoader)

