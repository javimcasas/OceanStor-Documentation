
### **Requisitos**

* Conexión por consola serie al switch

---

### **Tareas**

1. Inicia sesión en el switch
2. Entra en el modo de sistema:

   `system-view`
3. Entra en el modo de Autenticación, Autorización y Contabilidad (AAA):

   `aaa`
4. Crea un usuario local:

   `local user sshadmin password irreversible-cipher Huawei@123`

   `local user sshadmin level 3`

   `quit`
5. Habilita SSH:

   `stelnet server enable`
6. Añade el usuario a SSH:

   `ssh user sshadmin authentication-type password`

   `ssh user sshadmin service-type stelnet`
7. Configura la interfaz de usuario:

   `user-interface vty 0 4`

   `authentication-mode aaa`

   `protocol inbound ssh`
8. Configuraciones SSH:

   `ssh client first-time enable`

   `ssh server ip-block disable`

   `ssh server-source all-interface`
9. Configuraciones del usuario:

   `local-aaa-user password policy administrator`

   `undo password alert original`

   `password expire 0`
10. Guarda los cambios:

    `save`
