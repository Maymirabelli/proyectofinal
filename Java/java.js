//aray de constructor de personas
var listaPersonas = [];

//constructor de perosnas
class Persona {
    constructor(name, lastName, email, phone) {
        this.Name = name;
        this.LastName = lastName;
        this.Phone = phone;
        this.Email = email;
    }
};

// Cuando se envia el formulario se crea una nueva persona y se envian los datos de los campos 
// a las propiedades de cada obejeto
$("#contact-form").submit(function (e) {
    e.preventDefault();
    var personas = new Persona($("input[name = 'name']").val(),
                            $("input[name = 'lastName']").val(),
                            $("input[name = 'email']").val(),
                            $("input[name = 'phone']").val());
    list.push(personas);
    console.log(listaPersonas);
});