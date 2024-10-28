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