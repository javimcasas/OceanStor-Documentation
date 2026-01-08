### **Definición**

Los sistemas de almacenamiento tienen dos versiones de firmware, la **main** y la **patch**. La versión main incluye cambios importantes, mientras que los parches se utilizan principalmente para la corrección de errores. Existen varios parches para cada versión main.

---

### **Smart Kit**

#### Requisitos

- **Smart Kit** con todas las funciones instaladas: [SmartKit Download](https://support.huawei.com/enterprise/en/distributed-storage/smartkit-pid-8576706/software/261548176?idAbsPath=fixnode01%7C7919749%7C251366268%7C250389224%7C251366263%7C8576706)
- **Patch** descargado: [Software Download](Software Download.md)
- **Management IPs** de los **Controllers** (proporcionadas por el cliente)
- **Ethernet** (RJ45) Cable para la conexión

#### Tareas

1. Conectarse al **Controller** a través del cable RJ45
2. Abrir el software **SmartKit**
3. Añadir el dispositivo si no está ya presente en **Devices** > **Add**:

   - **IP**: Usar la IP de gestión del controller
   - **User**: admin
   - **Pass**: Contraseña de administrador (proporcionada por el cliente)
     ![MainUpgrade001.png](..\Images\MainUpgrade001.png)
4. Ir a **Upgrade/Patch Installation** > **Hot Patch Installation**
   ![PatchUpgrade001.png](..\Images\PatchUpgrade001.png)
5. Seleccionar el **Device** a actualizar
   ![PatchUpgrade002.png](..\Images\PatchUpgrade002.png)
6. Seleccionar el dispositivo y **Manual Select patch**
   ![PatchUpgrade003.png](..\Images\PatchUpgrade003.png)
7. Hacer clic en **Select Patch Package**, buscar el archivo de **Patch** y pulsar **Finish**
   ![PatchUpgrade004.png](..\Images\PatchUpgrade004.png)
8. Seleccionar el Device y hacer clic en **Start** para iniciar el **Device Upgrade**

---

### **Device Manager**

#### Requisitos

- **Patch** descargado de la Storage Solution requerida
- **Management IPs** de los **Controllers** (proporcionadas por el cliente)
- **License File** para la **Storage Solution** requerida
- **Ethernet** (RJ45) Cable para la conexión

#### Tareas

1. Conectarse al **Controller** a través del cable RJ45
2. Abrir **Device Manager** (https://192.168.128.101 o la IP del puerto)
3. Entrar en **Settings** > **Upgrade**
   ![PatchUpgrade005.png](..\Images\PatchUpgrade005.png)
4. Hacer clic en el botón **Manual Upgrade** para iniciar el proceso
   ![PatchUpgrade006.png](..\Images\PatchUpgrade006.png)
5. Hacer clic en **Hot Patch**
   ![PatchUpgrade007.png](..\Images\PatchUpgrade007.png)
6. Desmarcar **Update Check Item Component Package**
7. Buscar el **Update File** y hacer clic en **Upload**
8. Hacer clic en **Upgrade**
   ![PatchUpgrade008.png](..\Images\PatchUpgrade008.png)
