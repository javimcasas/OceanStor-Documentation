
### Definición

Los Snapshots son una tecnología de protección de datos. Son copias en un punto en el tiempo de un Sistema de Archivos específico. Pueden utilizarse para recuperar datos, realizar una reversión en el Sistema de Archivos o almacenar un estado específico del dispositivo de almacenamiento.

Es posible crear Snapshots cuando el Sistema de Almacenamiento tiene HyperMetro configurado. En este caso, los Snapshots se almacenan en ambos dispositivos para alta disponibilidad y se selecciona el par HyperMetro.

---

### Requisitos

- Sistema de Archivos creado ([[File System Creation]])
- Par HyperMetro creado (solo para dispositivos en HyperMetro)

### Tareas

1. Accede al Device Manager (https://192.168.128.101 o la IP de gestión)
2. Ve a **Data Protection** > **File Systems**
   ![SnapshotCreation001.png](../../Images/SnapshotCreation001.png)
3. Haz clic en '**Snapshots**' en la barra de navegación superior
4. Haz clic en el botón '**Create**'
   ![SnapshotCreation002.png](../../Images/SnapshotCreation002.png)
5. Completa los datos:

   - **Selected FS**: Agrega el FS que tendrá un Snapshot creado. En caso de que los Dispositivos estén en HyperMetro, el Snapshot debe crearse desde el Par HyperMetro.
   - **Name**: Nombre descriptivo para el Snapshot
   - **Description**: Descripción del Snapshot
   - **Tag**: Etiqueta para el Snapshot (ej. Daily / Weekly)
   - **Secure Snapshot**: Si está marcado, el Snapshot no será manipulable (ni eliminable) mientras el período de protección esté activo
