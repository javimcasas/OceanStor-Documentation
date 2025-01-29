### **Software Download**

#### Requirements
- Model of the Storage Arrays (e.g. OceanStor Dorado)
- Software version of the Storage Arrays on HyperMetro
- Operating System of the Quorum Server

#### Tasks

1. Enter: [https://support.huawei.com/](https://support.huawei.com/)

2. Search the **Model** of the required Storage Solution
   ![QuorumUpdate001](../Images/QuorumUpdate001.png)<br>
   <br>

3. Click **Software Download**
   ![QuorumUpdate002](../Images/QuorumUpdate002.png)<br>
   <br>

4. Select the **Main** version the Storage Cabinets are on
   ![QuorumUpdate003](../Images/QuorumUpdate003.png)<br>
   <br>

5. Download the Quorum Server Software, depending on its Operating System
   - Linux: .zip
   - RedHat: .rpm
   ![QuorumUpdate004](../Images/QuorumUpdate004.png)<br>
   <br>

---

### **Quorum Server Update**

#### Requirements
- Software downloaded for the Quorum Server (see previous point)
- Connection to the Quorum Server

#### Tasks
1. Connect to the **Quorum Server CLI**<br>
   • **User:** quorumAdmin<br>
   • **Pass:** Huawei@SYS3

2. Upload the **Software** downloaded on the previous point to the **Quorum Server**

3. Check whether the system is in **bash** or **dash**:<br>
   `bash ls -l /bin/sh`
   
4. In case the result is bash, continue. In case it's dash, enter this command and select NO:<br>
	`sudo dpkg-reconfigure dash`

5. Enter the 'package' directory inside the Upgrade File:<br>
	`cd package`

6. Start the upgrade for the Quorum Server:<br>
	`sudo sh ./quorum_server.sh -upgrade`<br>
   ![QuorumUpdate005](../Images/QuorumUpdate005.png)<br>
   <br>

7. Enter the Quorum Server:<br>
	`sudo qsadmin`<br>
   ![QuorumUpdate006](../Images/QuorumUpdate006.png)<br>
   <br>

8. Display the Cipher Configuration:<br>
	`show cipher_info`<br>
   ![QuorumUpdate007](../Images/QuorumUpdate007.png)<br>
   <br>

9. Display information about the Quorum Server and the version to verify the update:<br>
	`show server_info`<br>
   ![QuorumUpdate008](../Images/QuorumUpdate008.png)<br>
   <br>

10. Display the IPs connected to Quorum Server to verify the connections:<br>
	`show server_ip`<br>
   ![QuorumUpdate009](../Images/QuorumUpdate009.png)<br>
   <br>

#### References
- [Quorum Server Documentation](https://support.huawei.com/enterprise/en/doc/EDOC1100112636/b2a6b05f/installing-quorum-server-software)