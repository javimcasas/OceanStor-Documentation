
### **Montaje de la Máquina en el Rack**

#### Tareas

1. Seleccione con el cliente el **lugar** en el **rack** para las  **máquinas** , teniendo en cuenta lo siguiente:

   * Las **máquinas pesadas** deben ir **abajo** en el rack para el **balance de peso**
   * Deje algo de **espacio** (1~2U) desde la parte inferior para **facilitar la gestión de cables**
   * Anote en qué **rack** y en qué **U** se instala la máquina para **documentación**
2. Instale las  **guías** , teniendo en cuenta lo siguiente:

   * La indicación de los lados **Frente / Atrás** debe estar **hacia adentro** y correctamente posicionada
   * Cualquier **tornillo** en las **guías** debe ser **retirado** antes de presentarlas
   * Asegúrese de colocar en la parte frontal los tornillos de **abajo** y el  **segundo de arriba** .
3. Deslice cuidadosamente la máquina en la guía hasta que encaje
4. Atornille la máquina abriendo las trampillas de sus lados, asegurándose de que queden bien sujetas tanto al frente como al fondo.
5. Siguiendo el **Diseño de Bajo Nivel** (LLD) conecte el Controlador de la siguiente manera:

   * **Energía** : Ambos enchufes de energía del Controlador deben estar conectados. Es necesario probar con cada uno para asegurar redundancia en la energía. Uno de los enchufes debe conectarse a la toma de energía derecha del rack y el otro a la toma izquierda del rack.
   * **Gestión** : Después de la configuración con el PC, conéctese al cable de gestión (RJ45)
   * **Interfaz** : Conéctese con redundancia a los switches disponibles (Cable de fibra óptica)
   * **Expansión** : Conéctese con redundancia al DAE disponible, si lo hay (Cable SAS)
   * **Múltiples DAEs** : Si hay más de un DAE, deben conectarse en cadena

---

### **Instalación de Discos**

#### Tareas

1. Asegúrese de que el(los) disco(s) pertenecen a la máquina antes de la instalación
2. Dependiendo de si hay un disco viejo o un disco falso:

   * **Disco vacío** : presione con el pulgar y el índice en la parte inferior y superior del plástico para retirar el disco falso
   * **Disco viejo / Reemplazo** : Presione sobre la **línea verde** en la parte superior del  **disco viejo** , la parte frontal de plástico se moverá hacia atrás. Luego, retire el disco
3. Presione sobre la **línea verde** en la parte superior del  **nuevo disco** , la parte frontal de plástico se moverá hacia atrás
4. Deslice el disco en la ranura vacía hasta que haga clic y la parte frontal se coloque recta
5. Espere a que los indicadores LED se enciendan para asegurar la conexión
6. Si hay acceso al Controlador a través del PC, conéctese al **Puerto de Gestión** y abra **Administrador de Dispositivos**
7. Ingrese a **Sistema** > **Hardware** > **Dispositivos**
8. Verifique a través del **Controlador de Enclosure** o el **Enclosure de Discos** (depende de dónde estén montados los discos) si el(los) disco(s) recién instalados están allí. Si el(los) disco(s) no aparecen, intente esperar un poco para que el sistema los reconozca y actualice el Administrador de Dispositivos.
