
## Definición

Los Dominios HyperMetro pueden usar dos Quorum Servers, actuando como Activo-Pasivo. En caso de fallo en el Quorum Server activo, los dispositivos de almacenamiento se moverán al Quorum Server Pasivo, añadiendo así una capa de redundancia al arbitraje del Quorum Server.

---

## Requisitos

* Quorum Server Pasivo instalado (ver: [[Quorum Server Install]])
* IPs del Quorum Server Pasivo configuradas
* Acceso a los Quorum Servers Activo y Pasivo

---

## Exportación de Certificados

1. Accede al Quorum Server Pasivo:
   `qsadmin`
2. Exporta el archivo de solicitud de certificado (.csr):
   `export tls_cert`
3. Verifica el archivo creado en el directorio **/opt/quorum_server/export_import**

---

## Firma del Certificado

1. Mueve el archivo de solicitud de certificado (.csr) del Quorum Server Pasivo al directorio **/opt/quorum_server/export_import** del Quorum Server Activo
2. Da permisos al archivo para el Quorum Server:
   `chown quorumsvr:quorumsvr FILENAME.csr`
3. Firma el archivo .csr y genera el archivo .crt de la CA:
   `generate tls_cert csr=FILENAME.csr cert_name=FILENAME.crt`
4. Obtén el archivo de la CA (cps_ca.crt) y el certificado firmado del Quorum Server Pasivo (FILENAME.crt) del directorio **/opt/quorum_server/export_import**

---

## Importar Certificados

1. Mueve el archivo de la CA (cps_ca.crt) y el certificado firmado del Quorum Server Pasivo (FILENAME.crt) del Quorum Server Activo al directorio **/opt/quorum_server/export_import** en el Quorum Server Pasivo
2. Da permisos a los archivos en el Quorum Server Pasivo:
   `chown quorumsvr:quorumsvr cps_ca.crt`
   `chown quorumsvr:quorumsvr FILENAME.crt`
3. Importa los certificados en el Quorum Server Pasivo:
   `import tls_cert cert_name=hm_third_cert1 ca=cps_ca.crt cert=qs_cert.crt class=hm`

---

## Lista Blanca de Dispositivos

1. Accede al Quorum Server:
   `qsadmin`
2. Consulta el ID del certificado y registra el valor ' **Cert id** ':
   `show tls_cert`
   ![QuorumServer_005.png](../../Images/QuorumServerConfig_005.png)
3. Usa el **cert_id: 1** generado después de importar el certificado
4. Añade a la lista blanca los Dispositivos de Almacenamiento:
   `add white_list sn=xxxxxxxxxxxxx cert_id=1`
