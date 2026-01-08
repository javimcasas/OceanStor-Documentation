
### Definición

Cuando el cliente olvida la contraseña de su usuario administrador o la configuramos incorrectamente, podemos cambiar la contraseña del usuario a una nueva.

### Solución

1. Conéctese a través del puerto serial del gabinete de almacenamiento (con cable serial).
2. Abra el software **PuTTY**.
3. Seleccione el modo de conexión **Serial**.
4. Ingrese la velocidad de **115200**.
5. Presione **Abrir** para conectarse al gabinete.
6. Inicie sesión con las siguientes credenciales:<br>
   -**Usuario**: `_super_admin_`<br>
   -**Contraseña**: `Admin@revive`<br>

      **MUCHO CUIDADO**
       Si se ha perdido la contraseña de `_super_admin`, bloquee el usuario intentando iniciar sesión varias veces y pulse el botón de encendido de la cabina dos veces en menos de 2.5 s.

7. Ejecute el siguiente comando:

    `initpasswd`

8. Ingrese los siguientes datos:<br>
   -**Usuario**: `admin`<br>
   -**Contraseña**: `NewPasswordForCabinet`<br>
   -**Confirmar contraseña**: `NewPasswordForCabinet`<br>  
9. Intente conectarse nuevamente al gabinete con el usuario administrador