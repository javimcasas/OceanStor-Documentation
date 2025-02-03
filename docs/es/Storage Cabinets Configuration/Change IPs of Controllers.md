
#### **Requisitos:**

* **IPs predeterminadas** de los puertos de gestión de los controladores (consultar sección de  **datos** )
* **IPs de gestión** diseñadas para las máquinas (proporcionadas por el cliente)
* Cable **Ethernet** (RJ45) para la conexión

---

#### **Datos**

* IPs predeterminadas de los puertos de gestión de los controladores:
  * Puerto A: 192.168.128.101
  * Puerto B: 192.168.128.102
* IPs predeterminadas de los puertos de mantenimiento de los controladores:
  * Puerto A: 172.31.128.101
  * Puerto B: 172.31.128.102
* IPs predeterminadas de los puertos de red de los controladores:
  * Puerto A: 127.127.127.10
  * Puerto B: 127.127.127.11
* Contraseñas predeterminadas: Huawei12#$ / Admin@storage / admin@Storage / Admin@Storage

---

#### **Tareas**

1. Cambiar la IP del adaptador de red del portátil

   1. Ir a **Configuración de Red** > **Configuración avanzada de red** > **Conexiones de red**
   2. Localizar **Adaptador Ethernet** > **Propiedades**
   3. Seleccionar **Protocolo de Internet Versión 4** (TCP/IPv4) >  **Propiedades** :
      * IP: Diferente de las predeterminadas del controlador
      * Subnet: 255.255.255.0
   4. Hacer clic en ' **OK** ' para aplicar los cambios y cerrar las ventanas
2. Conectar el cable RJ45 al **Puerto de Gestión** del **Controlador A** al portátil
3. Abrir **Administrador de dispositivos** ([https://192.168.128.101:8088](https://192.168.128.101:8088) o la IP del puerto) > **Sistema** > **Hardware**
   ![ChangeIPs001](../../Images/ChangeIPs001.png)
4. Seleccionar el chasis del controlador > Moverse hacia la parte trasera > Seleccionar el puerto de gestión del **Controlador B**
   ![ChangeIPs002](../../Images/ChangeIPs002.png)
5. Hacer clic en **Operación** > **Modificar** para cambiar la IP del controlador:

   * IP: Establecer la IP de gestión
   * Dejar el resto como está

   ![ChangeIPs003](../../Images/ChangeIPs003.png)
6. Realizar lo mismo para el **Controlador A**
7. Desconectar de la máquina y pedir al cliente que pruebe la conexión a la IP de gestión cambiada

---

#### **Información Extra**

* Para **reconectar** a la máquina después de cambiar las  **IPs de los puertos de gestión** , también deberá cambiarse el **puerto Ethernet del PC** para que coincida con las IPs cambiadas
