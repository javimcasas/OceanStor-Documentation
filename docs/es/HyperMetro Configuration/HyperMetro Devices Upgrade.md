### Requisitos

- Software descargado para los Dispositivos de Almacenamiento
- Servidores de Quorum actualizados (ver: [Actualización del Servidor Quorum](Quorum Server Update.md))

### Mejores Prácticas

Al actualizar **Dispositivos de Almacenamiento HyperMetro** en producción, debemos ser cuidadosos y actualizar solo **uno** de los Dispositivos de Almacenamiento.
Después de asegurarnos de que el servicio funciona correctamente, es necesario esperar al menos **1 día** antes de comenzar el proceso de actualización del otro Dispositivo de Almacenamiento.

Debemos asegurarnos de que el gabinete que estamos actualizando no sea el principal en el HyperMetro.

### Tareas

1. Ingresar a **Protección de Datos** > **Configuración** > **Dominio HyperMetro**

   ![HyperMetroUpgrade001](../../Images/HyperMetroUpgrade001.png)

   &nbsp;
2. Hacer clic en el **Dominio HyperMetro del Sistema de Archivos** para obtener información

   ![HyperMetroUpgrade002](../../Images/HyperMetroUpgrade002.png)

   &nbsp;
3. Si el **Rol de Arbitraje** es **Preferido**, puedes hacer el cambio a través de '**Operación**' > '**Cambio de Sitio Preferido**'.Si es **No Preferido**, no es necesario hacer nada.

   ![HyperMetroUpgrade003](../../Images/HyperMetroUpgrade003.png)

   &nbsp;
4. Ingresar a **Protección de Datos** > **Entidades de Protección** > **LUNs**

   ![HyperMetroUpgrade004](../../Images/HyperMetroUpgrade004.png)

   &nbsp;
5. Hacer clic en '**Pares HyperMetro**'

   ![HyperMetroUpgrade005](../../Images/HyperMetroUpgrade005.png)

   &nbsp;
6. Seleccionar todos los Pares HyperMetro cuya columna **Rol de Recurso Local** sea '**Preferido**'

   ![HyperMetroUpgrade006](../../Images/HyperMetroUpgrade006.png)

   &nbsp;
7. Hacer clic en el **Botón de Cambio de Sitio Preferido** y en '**OK**' en la siguiente ventana

   ![HyperMetroUpgrade007](../../Images/HyperMetroUpgrade007.png)

   &nbsp;
8. El gabinete ya está listo para ser actualizado. Consulta [Actualización del Software de la Máquina](../Storage Cabinets Configuration/Update Machine's Software.md) para más información sobre este proceso.
