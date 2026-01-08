### **Definition**

Storage systems have two firmware versions, the **main** and the **patch**. The main version includes major changes, while the patches are mainly used for bug fixing. There are several patches for each main version.

---

### **Smart Kit**

#### Requirements

- **Smart Kit** with all functions installed: [SmartKit Download](https://support.huawei.com/enterprise/en/distributed-storage/smartkit-pid-8576706/software/261548176?idAbsPath=fixnode01%7C7919749%7C251366268%7C250389224%7C251366263%7C8576706)
- **Patch** downloaded: [Software Download](Software Download.md)
- **Management IPs** of the **Controllers** (given from client)
- **Ethernet** (RJ45) Cable for connection

#### Tasks

1. Connect to the **Controller** through the RJ45 cable
2. Open the **SmartKit** Software
3. Add the device if it's not there already in **Devices** > **Add**:

   - **IP**: Use the management IP of the controller
   - **User**: admin
   - **Pass**: Admin Password (given by customer)
     ![MainUpgrade001.png](..\Images\MainUpgrade001.png)
4. Go to **Upgrade/Patch Installation** > **Hot Patch Installation**
   ![PatchUpgrade001.png](..\Images\PatchUpgrade001.png)
5. Select the **Device** to update
   ![PatchUpgrade002.png](..\Images\PatchUpgrade002.png)
6. Select the device and **Manual Select patch**
   ![PatchUpgrade003.png](..\Images\PatchUpgrade003.png)
7. Click **Select Patch Package**, browse for the **Patch** file and press **Finish**
   ![PatchUpgrade004.png](..\Images\PatchUpgrade004.png)
8. Select the Device and click **Start** to start the **Device Upgrade**

---

### **Device Manager**

#### Requirements

- **Patch** downloaded of required Storage Solution
- **Management IPs** of the **Controllers** (given from client)
- **License File** for the required **Storage Solution**
- **Ethernet** (RJ45) Cable for connection

#### Tasks

1. Connect to the **Controller** through the RJ45 cable
2. Open **Device Manager** (https://192.168.128.101 or the IP of the port)
3. Enter **Settings** > **Upgrade**
   ![PatchUpgrade005.png](..\Images\PatchUpgrade005.png)
4. Click on **Manual Upgrade** button to start the process
   ![PatchUpgrade006.png](..\Images\PatchUpgrade006.png)
5. Click **Hot Patch**
   ![PatchUpgrade007.png](..\Images\PatchUpgrade007.png)
6. Unmark **Update Check Item Component Package**
7. Browse for the **Update File** and click **Upload**
8. Click **Upgrade**
   ![PatchUpgrade008.png](..\Images\PatchUpgrade008.png)
