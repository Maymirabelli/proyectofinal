
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
        let confirmar = confirm ("Do you want to send the data?")
        if (confirmar){
            let pName = document.getElementById("name").value;
            let pAge = document.getElementById("age").value;
            let pEmail = document.getElementById("email").value;
            let pPhone = document.getElementById("phone").value;
            
            let user = new People (pName, pAge, pEmail, pPhone)
            peopleList.push(user)
            showUser()
                         
        }
        else {
            alert ("No data entered. You must complete the entire form")
        }
    }

    
}

// MOSTRAR DATOS ENVIADOS

function showUser(){
    for (let user of peopleList){
        $($("#dataSent").append ( 
        `<div class="User">
        <h3>${user.name} The data you sent is:</h3>
        <p> ${"pName" , "pAge" , "pEmail" , "pPhone"} </p>`)).fadeIn ("slow" , function(){
            $("#dataSent").fadeOut("slow" , function(){
                $("#dataSent").fadeIn("slow")
            })
        })
    }
}

let peopleList = [] ;

//* ENVÍO DE DATOS DEL FORMULARIO 

$("#boton").on ("click", userLoader)