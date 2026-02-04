
### Definición

Los Snapshots son una tecnología de protección de datos. Son copias en un punto en el tiempo de un Sistema de Archivos específico. Pueden utilizarse para recuperar datos, realizar una reversión en el Grupo de Protección o almacenar un estado específico del dispositivo de almacenamiento.

Es posible crear Snapshots cuando el Sistema de Almacenamiento tiene HyperMetro configurado. En este caso, los Snapshots se almacenan en ambos dispositivos para alta disponibilidad y se selecciona el par HyperMetro.

---

### Requisitos

- Grupo de Protección creado
- Par HyperMetro creado (solo para dispositivos en HyperMetro)

### Tareas

1. Accede al Device Manager (https://192.168.128.101 o la IP de gestión)
2. Ve a **Data Protection** > **Protection Groups**
   ![Snapshot_PG001.png](../../Images/Snapshot_PG001.png)
3. Haz clic en '**Snapshot CGs**' en la barra de navegación superior
4. Haz clic en el botón '**Create**'
   ![Snapshot_PG002.png](../../Images/Snapshot_PG002.png)
5. Completa los datos:

   - **PG**: Agrega el PG que tendrá un Snapshot creado. En caso de que los Dispositivos estén en HyperMetro, el Snapshot debe crearse desde los HyperMetro CGs.
   - **Owning vStore**: vStore que aloja el Snapshot
   - **Creation Mode**:
     - **New Snapshot**: Se crea un nuevo Snapshot (Grupo de LUN).
     - **Select a target LUN Group**: Se selecciona un Grupo de LUN para convertirse en el snapshot.
   - **Name**: Nombre descriptivo para el Snapshot
   - **Description**: Descripción del Snapshot
     ![Snapshot_PG003.png](../../Images/Snapshot_PG003.png)
