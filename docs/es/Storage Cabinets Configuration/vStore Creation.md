
#### Uso

Los vStores junto con los Puertos Lógicos se utilizan para aislar redes. Esto se puede usar para dedicar una red a un entorno específico (desarrollo, preproducción, ...) o para dividir departamentos dentro de una empresa.

#### Requisitos

* Conexión al **Controlador** a través del Puerto de Gestión (cable RJ45)
* Requisitos de **Almacenamiento Virtual** (GB / TB)
* **Puertos Lógicos** a utilizar del cliente

---

#### Tareas

1. Ingrese al Administrador de Dispositivos ([https://192.168.128.101](https://192.168.128.101) o la IP del puerto)
2. Vaya a **Servicios** > **Servicio vStore** > **vStores**
   ![vStoreCreation001](../../Images/vStoreCreation001.png)
3. Haga clic en **Crear** y complete los datos:

   1. **Nombre** : Nombre descriptivo para el **vStore** (por ejemplo, VS_DEV)
   2. **Cupo de capacidad NAS** : Almacenamiento que será **virtualizado**
   3. **Cupo de capacidad SAN** : Almacenamiento que será **virtualizado**
   4. **Descripción** : Descripción útil para la utilidad del **vStore**
   5. **Asociar con el Pool de Almacenamiento** :
   6. Seleccione **Personalizado**
   7. Haga clic en **Seleccionado: 0**
   8. Seleccione el **Storage Pool** creado previamente
   9. Haga clic en **OK** para finalizar la asociación del **Storage Pool**
   10. **Asociar con Puerto FC (Fibre Channel)** :
   11. Seleccione **Personalizado**
   12. Haga clic en **Seleccionado: 0**
   13. Seleccione los **FC Ports** deseados ( **Módulo de Interfaz** )
   14. Haga clic en **OK** para finalizar la asociación de **FC Ports**
   15. **Selección de Puertos Lógicos** :

   * Si ya ha creado los  **Puertos Lógicos** , selecciónelos del menú
   * Si no, haga clic en **Agregar** y créelos a través de este menú, luego selecciónelos
4. Haga clic en OK para crear el **vStore**
