
## **Requisitos**

* Conexión a ambos gabinetes
* IPs para los puertos lógicos
* Credenciales para ambos gabinetes

## **Tareas**

1. Conéctate al **Gabinete A**
2. Crea un **Storage Pool** y un  **vStore** : [Creación de vStore](../Storage%20Cabinets%20Configuration/vStore%20Creation.md)
3. Crea un  **Puerto Lógico** : [Creación de Puertos Lógicos](../Storage%20Cabinets%20Configuration/Logical%20Ports%20Creation.md)
4. Conéctate al **Gabinete B**
5. Crea un **Storage Pool** y un  **vStore** : [Creación de vStore](../Storage%20Cabinets%20Configuration/vStore%20Creation.md) → Usa los mismos nombres que en el **Gabinete A**
6. Crea un  **Puerto Lógico** : [Creación de Puertos Lógicos](../Storage%20Cabinets%20Configuration/Logical%20Ports%20Creation.md) → Usa los mismos tipos de puertos que en el **Gabinete A**
7. Conéctate al **Gabinete A**
8. Entra en **Protección de Datos** > **Dispositivos Remotos**
9. Haz clic en ' **+** ' y completa la información:

   * **Tipo de Enlace** : Escoge entre enlace IP o enlace FC
   * **Puerto Local** : Selecciona el **Puerto Lógico** del **Gabinete A**
   * **Dirección IP Remota** : IP del **Puerto Lógico** del **Gabinete B**
   * **Administrador del Dispositivo Remoto** : Usuario **Admin** del **Gabinete B**
   * **Contraseña** : Contraseña de **Admin** del **Gabinete B**
10. Pulsa ' **Conectar** ' para conectar los dispositivos
    ![RemoteDevice001](../../Images/RemoteDevice001.png)
11. Selecciona los **enlaces** y haz clic en ' **OK** ' para vincular los dispositivos
    ![RemoteDevice002](../../Images/RemoteDevice002.png)

---

## **Configuración de Enlaces de Redundancia**

### **Requisitos**

* Dispositivo remoto agregado entre **Gabinete A** y **Gabinete B**

### **Tareas**

1. Conéctate al **Gabinete A**
2. Entra en **Protección de Datos** > **Dispositivos Remotos**
   ![RedundancyLinks001](../../Images/RedundancyLinks001.png)
3. Haz clic en el **Dispositivo Remoto** > ' **Operación** ' > ' **Agregar Enlace** '
   ![RedundancyLinks002](../../Images/RedundancyLinks002.png)
4. Selecciona otros puertos conectados para establecer nuevos **Enlaces** y haz clic en ' **OK** '
