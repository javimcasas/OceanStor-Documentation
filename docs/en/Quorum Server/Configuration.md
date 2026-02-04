### Definition

The Quorum Server configuration includes adding the Quorum Server IPs for the connection to the devices, signing the certificates from the storage devices to ensure a safe connection and whitelisting the storage devices in the Quorum.

---

### IP Adding

1. Access the Quorum Server:
   ``qsadmin``
2. Add the IP(s) of the Quorum Server:
   ``add server ip XX.XX.XX.XX``
3. Check for the IPs inside the Quorum Server:
   ``show server_ip``

---

### Certificate Signing

1. Access the Storage Device(s) that will connect to the Quorum Server through DeviceManager
2. Access **Settings > Certificates** in DeviceManager
   ![QuorumServerConfig_001.png](../../Images/QuorumServerConfig_001.png)
3. Select '**HyperMetro arbitration certificate**' and **Export Request File**
   ![QuorumServerConfig_002.png](../../Images/QuorumServerConfig_002.png)
4. Move the .csr file generated to the Quorum Server VM: **/opt/quorum_server/export_import**
5. Give permissions to the file for the Quorum Server:
   ``chown quorumsvr:quorumsvr FILENAME.csr``
6. Sign the .csr file and generate the CA .crt file:
   ``generate tls_cert csr=FILENAME.csr cert_name=FILENAME.crt``
7. Obtain the CA file (cps_ca.crt) and the signed HyperMetro arbitration certificate (FILENAME.crt) from the **/opt/quorum_server/export_import** directory
8. Access **Settings > Certificates** in DeviceManager for the Storage Device
9. Select '**HyperMetro arbitration certificate**' and **Import Certificate**
   ![QuorumServerConfig_003.png](../../Images/QuorumServerConfig_003.png)
10. Upload '**Certificate File**' as the signed HyperMetro arbitration certificate (FILENAME.crt)
11. Upload '**CA Certificate File'** as the trusted entity signature (cps_ca.crt)
    ![QuorumServerConfig_004.png](../../Images/QuorumServerConfig_004.png)
12. Press **OK** and finish the certificate signing process

---

### Device Whitelisting

1. Access the Quorum Server:
   ``qsadmin``
2. Query the certificate ID and record the '**Cert id**' value:
   ``show tls_cert``
   ![QuorumServerConfig_005.png](../../Images/QuorumServerConfig_005.png)
3. Whitelist the Storage Device(s):
   ``add white_list sn=xxxxxxxxxxxxx cert_id=0``
