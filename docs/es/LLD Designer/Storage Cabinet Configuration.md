
### **Selección del Modelo de Gabinete**

1. Selecciona el gabinete que se representará en el diseño (dado por el cliente)
2. Arrastra y coloca el gabinete sobre el lienzo
   ![CabinetSelecting001](../../Images/CabinetSelecting001.png)
3. Completa la información:

   * **Nombre** : Nombre descriptivo del gabinete
   * **Modelo del Dispositivo** : Selecciona el Modelo (dado por el cliente)
   * **Estante del Controlador** : Normalmente dejarlo como está
   * **SN** : Ingresa (si se conoce) el ESN del gabinete
4. Haz clic en ' **OK** ' para crear el **Dispositivo de Almacenamiento**
   ![CabinetSelecting002](../../Images/CabinetSelecting002.png)

---

### **Configuración de los Módulos de Interfaz IO**

1. Haz clic en el **Dispositivo de Almacenamiento** que necesita configuración
2. Haz clic derecho en cualquier **ranura** para agregar un  **Módulo de Interfaz** , consulta las **Mejores Prácticas** a continuación
   ![InterfaceConfiguration001](../../Images/InterfaceConfiguration001.png)
3. Siguiendo el documento de preventa, completa los puertos decididos por el cliente
4. Cuando todos los puertos estén asignados, haz clic en ' **OK** ' para finalizar el proceso

---

#### **Mejores Prácticas**

* El Módulo SAS normalmente se coloca justo al lado de los puertos SAS del gabinete (para expansión DAE)
  ![InterfaceConfiguration002](../../Images/InterfaceConfiguration002.png)
* Siguiendo la prioridad de los puertos, las ranuras más a la derecha generalmente se dejan vacías para futuras expansiones
  ![InterfaceConfiguration003](../../Images/InterfaceConfiguration003.png)

---

### **Agregar DAEs (Unidades de Almacenamiento de Discos)**

1. Haz clic en el **Dispositivo de Almacenamiento** que tiene DAE(s)
2. Si los puertos SAS disponibles en el controlador no son suficientes para el número de DAEs, debe agregarse un módulo de interfaz SAS en el controlador
3. Dirígete al **Punto 3** y selecciona la información:

   * **Caja de Discos** : Selecciona el **tipo de Caja de Discos** (dado por el cliente) y el número de ellas
   * **SSD / SAS** : Agrega los **Discos** que se incluirán en el DAE
4. Haz clic en ' **Configuración** ' para agregar automáticamente el/los **DAE(s)** al Dispositivo de Almacenamiento
   ![DAEAdding001](../../Images/DAEAdding001.png)
5. Para revisar las conexiones, haz clic en ' **Vista trasera del Dispositivo de Almacenamiento** '
   ![DAEAdding002](../../Images/DAEAdding002.png)
