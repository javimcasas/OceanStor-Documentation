
### Sistema de Archivos No Alcanzable

#### Definición

Intente hacer un ping a través de la misma VLAN a las IPs de los Puertos Lógicos asociados al Sistema de Archivos en el arreglo de almacenamiento. Si no son accesibles, el cliente no podrá acceder a sus Recursos Compartidos

---

#### Solución

1. Si el ping está fallando, revise la configuración de los puertos lógicos. Asegúrese de que los puertos correctos estén agrupados y activos con las IPs correctas
2. Si los paquetes están pasando a través de la VLAN, asegúrese de que el modo de ingestión del Switch esté configurado igual que los Arreglos de Almacenamiento Huawei
