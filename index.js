const readline = require('readline');
console.log("Iniciando servicio...");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const conform = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var opciones = [
    "1 - No se realizan las consultas medicas",
    "2 - Me aparecen dos consultas al mismo tiempo",
    "3 - No puedo cancelar una cita",
    "4 - No puedo ver mis citas realizadas",
    "5 - No puedo guardar informacion de mis consultas",
    "6 - Otro \n"];

console.log("Bienvenido a la mesa de ayuda de citas medicas! \n");
opciones.forEach(opcion => {
    console.log(opcion);
});
rl.question('¿Cual es su problema? \n', (answer) => {
    if(resolverProblema(answer)){
        console.log("Gracias por su preferencia, hasta pronto, que tenga un buen dia");
        rl.close();
        

    }else{
        console.log("No se pudo corregir el problema, en breve se cominicara con un acesor tecnico\n ");
        console.log("Llamando..")
        rl.close();
    };  
    
});


function resolverProblema(opcion){
    var res = false;
    switch (opcion) {
        case "1":
            console.log("Revisando conexion a internet..");
            console.log("Revisando controladores de red..");            
            console.log("Conexion establecida correctamente");
            res = true;
            break;
        case "2":
            console.log("Revisando datos del usuario..");
            console.log("Corrigiendo consultas duplicadas..");
            console.log("Reasignando consultas..");
            console.log("Colision corregida");
            res = true;
            break;
        case "3":
            console.log("Leyendo consultas");
            console.log("Actualmente no existe una opcion para cancelar citas");
            console.log("Si desea cancelar su cita envie un correo a citas-soporte@medicalgroup.com");
            console.log("En un futuro se añadira el modulo");
            res = true;
            break;
        case "4":
            console.log("Revisando la conexion a internet..");
            console.log("Leyendo permisos de escritura");
            console.log("Removiendo problemas en la base de datos...");
            console.log("Correccion terminada, revise su panel de administracion de citas");
            res = true;
            break;
        case "5":
            console.log("Revisando consultas...");
            console.log("Revise su correo electronico, los informes de cita se envia ahi");
            res = true;
            break;
        case "6":
            console.log("En breve lo comunicaremos con un tecnico para resolver el problema");
            
            res = true;
            break;
        default:
            console.log("La opcion es invalida")
            res = true;
            break;
    }

    return res;
   
}


