
### **Requisitos**

* Conexión por consola serie al switch
* Dirección IP de gestión proporcionada por el cliente

---

### **Tareas**

1. Inicia sesión en el switch
2. Entra en el modo de sistema:

   `system-view`
3. Asigna la IP a la interfaz:

   `interface MEth0/0/0`

   `ip address IP_GESTION MASCARA_SUBRED`
4. Configura la puerta de enlace (Gateway):

   `ip route-static 0.0.0.0 0.0.0.0 IP_GATEWAY`
5. Guarda los cambios:

   `save`
6. Verifica la asignación:

   `display this` o `display current-configuration interface MEth0/0/0`
