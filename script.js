function inicioSesion() {
    const usuario = prompt('Ingresa tu usuario:');
    if (usuario === 'admin') {
        let intentos = 3;
        while (intentos > 0) {
            const contrasena = Number(prompt('Ingrese su contraseña: '));
            if (contrasena === 123) {
                console.log('Bienvenido: ' + usuario);
                return true; 
            } else {
                intentos--;
                console.log('Contraseña incorrecta. Intentos restantes: ' + intentos);
                if (intentos === 0) {
                    console.log('Ha superado el número de intentos permitidos. Bloqueando acceso.');
                    return false;
                }
            }
        }
    } else {
        console.log('Usuario no existe en la base de datos');
        return false; 
    }
}

function capturarHorasEstacionamiento() {
    let horaEntrada = parseInt(prompt("Ingrese la hora de entrada (0 a 24):"));
    let horaSalida = parseInt(prompt("Ingrese la hora de salida (0 a 24):"));

    let horasEstacionado = horaSalida - horaEntrada;

    if (horasEstacionado < 0 || horaEntrada < 0 || horaSalida < 0 || horaEntrada > 24 || horaSalida > 24) {
        console.log("Horas de entrada o salida inválidas. Intente de nuevo.");
        return capturarHorasEstacionamiento();
    }

    return horasEstacionado;
}

function calcularCostoEstacionamiento(horas) {
    let costo;
    if (horas < 2) {
        costo = horas * 3000;
    } else if (horas <= 5) {
        costo = horas * 2500;
    } else {
        costo = horas * 2000;
    }
    return costo;
}

function mostrarTotalEstacionamiento(costo) {
    console.log(`El costo del estacionamiento para este vehículo es: $${costo}`);
}

let totalEstacionamiento = 0;

if (inicioSesion()) {
    let continuar = true;

    while (continuar) {
        let horas = capturarHorasEstacionamiento();
        let costo = calcularCostoEstacionamiento(horas);
        mostrarTotalEstacionamiento(costo);
        totalEstacionamiento += costo;

        let respuesta = prompt("¿Desea calcular para otro vehículo? (s/n):");
        continuar = (respuesta.toLowerCase() === 's');
    }

    console.log(`El total acumulado del estacionamiento es: $${totalEstacionamiento}`);
}
