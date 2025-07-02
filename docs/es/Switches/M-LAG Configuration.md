
### **Requisitos**

* Switches conectados mediante puertos de 100G
* IPs de gestión de ambos switches
* Interfaces de gestión de ambos switches interconectadas con un cable Ethernet

---

### **Tareas**

1. Inicia sesión en **Switch A**
2. Entra en el modo de sistema:

   `system-view`
3. Configura el **Protocolo de Árbol de Expansión Virtual** ( **V-STP** ):

   `stp mode rstp`

   `stp v-stp enable`

   `stp bdu-protection-protection`

   `stp tc-protection`
4. Configura un grupo DFS y vincula las IPs de los puertos de red de gestión al grupo:

   `dfs-group 1`

   `priority 150`

   `dual-active detection source ip IP_GESTION_A peer IP_GESTION_B`

   `authentication-mode hmac-sha256 password CONTRASEÑA`

   `peerl-link mac-address remain enable paired-port`
5. Configura un peer-link para el switch:

   `interface eth-trunk 1`

   `mode lacp-static`

   `lacp timeout fast`

   `peer-link 1`

   `port vlan exclude 1`

   `trunkport 100GE1/0/INTERFAZ1`

   `trunkport 100GE1/0/INTERFAZ2`
6. Inicia sesión en **Switch B**
7. Ejecuta los mismos comandos, cambiando el orden de las IPs de gestión en este comando:

   `dual-active detection source ip IP_GESTION_B peer IP_GESTION_A`
8. Guarda los cambios:

   `save`
9. Verifica el estado del MLAG:

   `display dfs-group 1 m-lag`
