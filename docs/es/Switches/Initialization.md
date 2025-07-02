
## 1. Reunir Herramientas e Información Necesarias

* **Cable serie** : Normalmente un cable RJ45 a DB9 o USB a serie.
* **Software emulador de terminal** : Como PuTTY, SecureCRT o Tera Term.
* **Credenciales predeterminadas del switch** : Generalmente `admin` como usuario y la contraseña `Huawei@123`.
* **Plan de direccionamiento IP** : Decide las direcciones IP de gestión para el switch y los sistemas OceanStor.
* **Topología de red** : Comprende cómo se conectará el switch al sistema OceanStor.

---

## 2. Conectarse al Switch a través de Consola Serie

### Conectar el cable serie:

* Conecta el extremo RJ45 al puerto de consola del switch.
* Conecta el otro extremo (DB9 o USB) a tu portátil o PC.

### Configurar el emulador de terminal:

* Abre el software emulador de terminal.
* Establece el tipo de conexión como  **Serial** .

### Configurar los parámetros del puerto serie:

* **Velocidad (Baud rate)** : 9600
* **Bits de datos** : 8
* **Paridad** : Ninguna
* **Bits de parada** : 1
* **Control de flujo** : Ninguno

Enciende el switch (si aún no está encendido) y establece la conexión.

---

## 3. Iniciar Sesión en el Switch

* Presiona Enter para activar la consola.
* Si se solicita, introduce el nombre de usuario predeterminado (`admin`) y la contraseña (`Admin@123` o déjala en blanco si no hay ninguna establecida).
* Ahora deberías ver el prompt de la interfaz de línea de comandos (CLI).

---

## 4. Configurar Parámetros Básicos del Switch

* Entra al modo de vista del sistema:

  `system-view`
* Establece el nombre del switch (opcional pero recomendado):

  `sysname NOMBRE_DEL_SWITCH`
* Configura la hora del sistema:

  * Configura la zona horaria:

    `clock timezone NOMBRE_ZONA_HORARIA offset`
  * Sincroniza la hora con un servidor NTP (opcional pero recomendado):

    `ntp-service unicast-server IP_SERVIDOR_NTP`
* Guarda la configuración:

  `save`
