
### **Requisitos**

* Conexión por consola serie o SSH al switch
* VLAN para las interfaces
* Interfaz(es) a las que asignar la VLAN

---

### **Tareas**

1. Inicia sesión en el switch
2. Entra en el modo de sistema:

   `system-view`
3. Crea la VLAN:

   `vlan XX`
4. Lista las interfaces:

   `display interface brief`
5. Configura las interfaces como Trunk y permite el paso de la VLAN:

   `interface range INTERFACE1 to INTERFACE2` [por ejemplo: 25GE1/0/1 to 25GE1/0/4]

   `port link-type trunk`

   `port trunk allow-pass vlan 70`
6. Guarda los cambios:

   `save`
7. Verifica la configuración:

   `display interface PUERTO1`

   `display vlan XX`
