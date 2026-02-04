### Definición

HyperCDP (o Protección Continua de Datos) es una tecnología de protección de datos basada en Objetos CDP y Programaciones. Al programar una Programación CDP, es posible crear hasta un objeto HyperCDP cada pocos segundos.
Los Objetos HyperCDP pueden utilizarse como Snapshots, donde es posible realizar una reversión a un estado anterior.

---

### Requisitos

- Sistema de Archivos creado y accesible

---

### Tareas

1. Accede al Device Manager (https://192.168.128.101:8088 o la IP del puerto)
2. Ve a **Data Protection** > **Plans** > **File HyperCDP**
   ![HyperCDPConfig001.png](../../Images/HyperCDPConfig001.png)
3. Presiona el botón **'Create'** bajo **HyperCDP Schedules**
4. Completa los datos para el **Paso 1**:

   - **Name**: Nombre descriptivo para la **Programación HyperCDP**
   - **Owning vStore**: vStore que contiene el/los Sistema(s) de Archivos deseado(s)
   - **Available File Systems**: Selecciona el/los Sistema(s) de Archivos a los que aplicar la Programación HyperCDP
     ![HyperCDPConfig002.png](../../Images/HyperCDPConfig002.png)
5. Completa los datos para el **Paso 2**:

   - **Fixed Period**: Selecciona la frecuencia de creación de Objetos HyperCDP (similar a Snapshots)
   - **Secure Snapshot**: Los objetos HyperCDP no se modificarán hasta que expire el período de retención
   - **Retention**: Determina automáticamente cuántos objetos HyperCDP se mantienen en el sistema
   - **Specify Time**: Los Objetos HyperCDP pueden crearse en puntos de tiempo específicos (diario, semanal, ...)
     ![HyperCDPConfig003.png](../../Images/HyperCDPConfig003.png)
6. Una vez completada la configuración, se crearán la Programación HyperCDP y el primer Objeto HyperCDP. Utilizando este objeto, es posible realizar una Reversión al punto en el tiempo específico de creación.
