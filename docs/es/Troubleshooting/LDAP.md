
### Fallo de Autorización en DeviceManager

#### Definición

Después de ingresar los datos LDAP en la configuración de DeviceManager (ver XFILE) y hacer clic en ' **Test** ', el usuario recibe un mensaje de error.

---

#### Solución

1. Verifique si el Firewall está correctamente configurado y si los puertos LDAP están abiertos:

   * Acceda a través de SSH al arreglo de almacenamiento
   * Cambie al modo de desarrollador: `change user_mode current_mode user_mode=developer`
   * Intente hacer ping a las IPs externas: `ping --vrf vrf-srv -I CabinIP TargetIP`
   * Si el ping no llega, intente cambiar la configuración del Firewall hasta que sea correcta
2. Asegúrese de que la configuración LDAP esté especificada correctamente:

   * Ingrese al servidor LDAP y revise las propiedades del usuario
   * Asegúrese de que todas las rutas y referencias sean exactamente como se describen en el servidor (LDAP es sensible a mayúsculas y minúsculas)
