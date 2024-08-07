Creacion y verificacion de Token

1.-Creamos un servidor en el puerto 3000
2.creamos la Ruta '/login' con el metodo 'POST' donde a travez de un Json en el body enviaremos el usuario y contraseña para obtener el token.
3.Crearemos la Ruta '/verify' con un middleware que verificara si existe un toquen y luego se verificara si el token es valido o ha expirado.
4.Dependiendo el resultado se enviaran los estados correspondientes como respuesta.