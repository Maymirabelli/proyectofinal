class Users {
    constructor(pName, pEmail, pMessage) {
        this.name = pName;
        this.email = pEmail;
        this.message = pMessage;
        
    }
}

function LoadUser (e) {
    e.preventDefault
    validar()
    if (datosOk) {
        let confirmar = confirm ("Do you wanna send this form?")
        if (confirmar){
            let pName = document.getElementById("name").value
            let pEmail = document.getElementById("email").value
            let pMessage = document.getElementById("message").value
            
            
            let user = new Person (pName, pEmail, pMessage)
            userList.push(user)
            
             
        }
        else {
            alert ("You have to fulfill the form to send it.")
        }
    }

    
}

let userList = []

