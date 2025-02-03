
### **Requisitos**

* Conexión al **Controlador** a través del Puerto de Gestión (cable RJ45)
* **IP del Puerto Lógico**
* **Máscara de Subred** del Puerto Lógico
* **Rol** para el puerto proporcionado por el cliente (Gestión / Servicio / Replicación / ...)
* **Protocolo de Datos** para el puerto proporcionado por el cliente (NFS / CIFS / iSCSI / ...)
* **Tipo de Puerto** para el puerto proporcionado por el cliente
* **Puerto de Origen** para el puerto proporcionado por el cliente (Puertos del Módulo de Interfaz)
* **(Opcional) Puerta de Enlace** para el puerto proporcionado por el cliente

---

### **Acceso al Switch a Través de Ethernet**

#### Tareas

1. Ingrese al Administrador de Dispositivos ([https://192.168.128.101](https://192.168.128.101) o la IP del puerto)
2. Ingrese a **Servicios** > **Red** > **Puertos Lógicos**
   ![LogicalPortsCreation001](../../Images/LogicalPortsCreation001.png)
3. Haga clic en **Crear** y complete los datos:

   * **Nombre** : Nombre descriptivo para el puerto (por ejemplo, LP_DEV001)
   * **Rol** : Proporcionado por el cliente (comúnmente  **Servicio** )
   * **Protocolo de Datos** : Proporcionado por el cliente (comúnmente  **NFS** )
   * **vStore Propietario** : Seleccione el **vStore** creado previamente para el cliente
   * **Tipo de IP** : **IPv4** o **IPv6** (comúnmente  **IPv4** )
   * **IP del Puerto** : Proporcionada por el cliente (IP necesaria para el servicio)
   * **Máscara de Subred** : Proporcionada por el cliente (comúnmente 255.255.255.0)
   * **Puerta de Enlace** : Proporcionada por el cliente
   * **Tipo de Puerto** : Proporcionado por el cliente: **Puerto Ethernet**
   * **Puerto de Origen** : Puerto del **Módulo de Interfaz** proporcionado por el cliente
   * **Estado de Activación** : Comúnmente dejado como **Activado**
4. Haga clic en **OK** para crear el **Puerto Lógico**
   ![LogicalPortsCreation002](../../Images/LogicalPortsCreation002.png)

---

### **Acceso al Switch a Través de VLAN**

1. Ingrese al Administrador de Dispositivos ([https://192.168.128.101](https://192.168.128.101) o la IP del puerto)
2. Ingrese a **Servicios** > **Red** > **Red Ethernet**
3. Asegúrese de que los puertos que desea usar aparezcan como " **Link up** "
4. Haga clic en " **Bondar Puertos** " y " **Crear** " para completar la información:

   * **Nombre** : Nombre descriptivo para el Puerto de Enlace
   * **Controlador** : Seleccione el Controlador que tiene los puertos físicos
   * **Espacio de Red** : Déjelo como está
   * **Puertos Disponibles** : Seleccione los Puertos Físicos que formarán el puerto de enlace

   ![LogicalPortsCreation003](../../Images/LogicalPortsCreation003.png)
5. Haga clic en " **OK** " para crear el **Puerto de Enlace**
6. Haga clic en " **VLANs** " y " **Crear** " para completar la información:

   * **Tipo de Puerto** : Seleccione **Puerto de Enlace**
   * **Puerto de Origen** : Seleccione el puerto de enlace creado previamente
   * **ID** : Escriba el ID de la VLAN y presione " **Agregar** "

   ![LogicalPortsCreation004](../../Images/LogicalPortsCreation004.png)
7. Haga clic en " **OK** " para crear la **VLAN** con el **Puerto de Enlace**
8. Ingrese a **Red** > **Puertos Lógicos**
9. Haga clic en " **Crear** " y complete la información:

   * **Nombre** : Nombre descriptivo para el puerto (por ejemplo, LP_DEV001)
   * **Rol** : Proporcionado por el cliente (comúnmente  **Servicio** )
   * **Protocolo de Datos** : Proporcionado por el cliente (comúnmente  **NFS + CIFS** )
   * **vStore Propietario** : Seleccione el **vStore** creado previamente para el cliente
   * **Tipo de IP** : **IPv4** o **IPv6** (comúnmente  **IPv4** )
   * **IP del Puerto** : Proporcionada por el cliente (IP necesaria para el servicio)
   * **Máscara de Subred** : Proporcionada por el cliente (comúnmente 255.255.255.0)
   * **Puerta de Enlace** : Proporcionada por el cliente
   * **Tipo de Puerto** : **VLAN**
   * **Puerto de Origen** : Seleccione el Puerto de Origen creado previamente
   * **Estado de Activación** : Comúnmente dejado como **Activado**

   ![LogicalPortsCreation005](../../Images/LogicalPortsCreation005.png)
10. Haga clic en " **OK** " para crear el Puerto Lógico
11. Pruebe la conexión al Puerto Lógico mediante:

`ping LogicalPort_IP`
