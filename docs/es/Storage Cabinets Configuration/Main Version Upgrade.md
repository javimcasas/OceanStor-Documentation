### **Definición**

Los sistemas de almacenamiento tienen dos versiones de firmware, la **main** y la **patch**. La versión main incluye cambios importantes, mientras que los parches se utilizan principalmente para la corrección de errores. Existen varios parches para cada versión main.
Es **crucial** realizar una **Pre-Upgrade Evaluation** antes de actualizar cualquier sistema de almacenamiento.

---

### **Requisitos**

- **Pre-Upgrade Evaluation positiva**: [Pre Upgrade Evaluation](..\Health Checks\Pre Upgrade Evaluation.md)
- **Smart Kit** con todas las funciones instaladas: [SmartKit Download](https://support.huawei.com/enterprise/en/distributed-storage/smartkit-pid-8576706/software/261548176?idAbsPath=fixnode01%7C7919749%7C251366268%7C250389224%7C251366263%7C8576706)
- **Main Software** y **Patch** descargados: [Software Download](Software Download.md)
- **Management IPs** de los **Controllers** (proporcionadas por el cliente)
- **Ethernet** (RJ45) Cable para la conexión

---

### **Tareas**

1. Conectarse al **Controller** a través del cable RJ45
2. Abrir el software **SmartKit**
3. Añadir el dispositivo si no está ya presente en **Devices** > **Add**:
   - **IP**: Usar la IP de gestión del controller
   - **User**: admin
   - **Pass**: Contraseña de administrador (proporcionada por el cliente)
     ![MainUpgrade001.png](..\Images\MainUpgrade001.png)
4. Ir a **Upgrade/Patch Installation** > **Device Upgrade** > **Upgrade Policy Setting**
   ![MainUpgrade002.png](..\Images\MainUpgrade002.png)
5. Seleccionar el **Device** a actualizar
   ![MainUpgrade003.png](..\Images\MainUpgrade003.png)
6. Seleccionar **Upgrade Storage Device**
   ![MainUpgrade004.png](..\Images\MainUpgrade004.png)
7. Buscar el archivo de **Main Update** y pulsar **Finish**
   ![MainUpgrade005.png](..\Images\MainUpgrade005.png)
8. Pulsar **Modify** y seleccionar el **Patch Update** para incluir el **Patch** después de que finalice el **Main Update**
   ![MainUpgrade006.png](..\Images\MainUpgrade006.png)
9. Pulsar **OK** para iniciar el **Device Upgrade**
