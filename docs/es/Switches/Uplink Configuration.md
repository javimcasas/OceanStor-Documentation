
### **Requisitos**

* Conexión por consola serie o SSH a los switches
* VLAN para el Uplink
* Interfaces de Uplink

---

### **Tareas**

1. Inicia sesión en **Switch A**
2. Entra en el modo de sistema:

   `system-view`
3. Crea el Trunk:

   `interface Eth-Trunk10`

   `mode lacp`

   `mlag 10`

   `description UPLINK`

   `port link-type trunk`

   `port trunk allow-pass vlan XX`
4. Verifica las interfaces:

   `display interface brief`
5. Añade la(s) interfaz(es) al trunk:

   `interface range INT1 to INT2` o `interface INT1`

   `Eth-Trunk 10`
6. Guarda los cambios:

   `save`
7. Inicia sesión en **Switch B**
8. Realiza las mismas configuraciones que en **Switch A**
9. Verifica la configuración:

   `display Eth-Trunk 10`

   `display mlag`

   `display interface-brief`
