### Definition

HyperMetro Domains can use two Quorum Servers, acting as Active-Passive. In case of failure on the active Quorum Server, the storage devices will move to the Passive Quorum Server, thus adding a redundancy layer to the Quorum Server arbitration.

---

### Requirements

- Passive Quorum Server installed (see: [[Quorum Server Install]])
- Passive Quorum Server IPs Configured
- Access to Active & Passive Quorum Servers

---

### Certificate Exporting

1. Access the Passive Quorum Server:
   ``qsadmin``
2. Export the certificate request file (.csr):
   ``export tls_cert``
3. Check the file created in **/opt/quorum_server/export_import** directory

---

### Certificate Signing

1. Move the certificate request file (.csr) from the Passive Quorum Server to the Active Quorum Server's **/opt/quorum_server/export_import** directory
2. Give permissions to the file for the Quorum Server:
   ``chown quorumsvr:quorumsvr FILENAME.csr``
3. Sign the .csr file and generate the CA .crt file:
   ``generate tls_cert csr=FILENAME.csr cert_name=FILENAME.crt``
4. Obtain the CA file (cps_ca.crt) and the signed Passive Quroum Server certificate (FILENAME.crt) from the **/opt/quorum_server/export_import** directory

---

### Import Certificates

1. Move the CA file (cps_ca.crt) and the signed Passive Quroum Server certificate (FILENAME.crt) from the Active Quorum Server to the **/opt/quorum_server/export_import** directory in the Passive Quorum Server
2. Give permissions to the files on the Passive Quorum Server:
   ``chown quorumsvr:quorumsvr cps_ca.crt``
   ``chown quorumsvr:quorumsvr FILENAME.crt``
3. Import the certificates on the Passive Quorum Server:
   ``import tls_cert cert_name=hm_third_cert1 ca=cps_ca.crt cert=qs_cert.crt class=hm``

---

### Device Whitelisting

1. Access the Quorum Server:
   ``qsadmin``
2. Query the certificate ID and record the '**Cert id**' value:
   ``show tls_cert``
   ![QuorumServerConfig_005.png](../../Images/QuorumServerConfig_005.png)

   Use the **cert_id: 1** generated after importing the certificate
3. Whitelist the Storage Device(s):
   ``add white_list sn=xxxxxxxxxxxxx cert_id=1``
