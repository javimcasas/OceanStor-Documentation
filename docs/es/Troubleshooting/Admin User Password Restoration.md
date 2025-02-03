
### Definición

Cuando el cliente olvida la contraseña de su usuario administrador o la configuramos incorrectamente, podemos cambiar la contraseña del usuario a una nueva.

### Solución

1. Conéctese a través del puerto serial del gabinete de almacenamiento (con cable serial)
2. Abra el software **PuTTY**
3. Seleccione el modo de conexión **Serial**
4. Ingrese la velocidad de **115200**
5. Presione ' **Abrir** ' para conectarse al gabinete
6. Inicie sesión con las siguientes credenciales:

   * Usuario: _super_admin
   * Contraseña: Admin@revive
7. Ingrese **initpasswd**
8. Ingrese los siguientes datos:

   * **Usuario** : admin
   * **Contraseña** : NewPasswordForCabinet
   * **ConfirmarContraseña** : NewPasswordForCabinet
9. Intente conectarse nuevamente al gabinete con el usuario administrador
