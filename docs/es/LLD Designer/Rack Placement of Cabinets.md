
## **Requisitos**

* Arquitectura LLD (topología) completada

---

### **Colocación del Gabinete en el Rack**

1. Después de agregar todos los gabinetes, ve a **Planificación del Gabinete**
   ![CabinetPlacement001](../../Images/CabinetPlacement001.png)
2. Asegúrate de que todos los gabinetes sigan el orden correcto, de arriba hacia abajo:

   1. **Switches** (IP y Gestión)
   2. **Hosts** (si los hay)
   3. **Gabinetes de Almacenamiento** (OceanStor / OceanProtect)
   4. **Cajas de Discos** (DAEs)

   ![CabinetPlacement002](../../Images/CabinetPlacement001.png)

   Esta disposición asegura que las máquinas pesadas no terminen en la parte superior del rack, lo que causaría un desequilibrio de peso. Además, seguir esta estructura ayuda con la identificación y el cableado homogéneo para cada rack.
