### **Definition**

Storage systems have two firmware versions, the **main** and the **patch**. The main version includes major changes, while the patches are mainly used for bug fixing. There are several patches for each main version.

It is **crucial** to perform a **Pre-Upgrade Evaluation** before upgrading any storage system.

---

### **Requirements**

- **Positive Pre-Upgrade Evaluation**: [Pre Upgrade Evaluation](..\Health Checks\Pre Upgrade Evaluation.md)
- **Smart Kit** with all functions installed: [SmartKit Download](https://support.huawei.com/enterprise/en/distributed-storage/smartkit-pid-8576706/software/261548176?idAbsPath=fixnode01%7C7919749%7C251366268%7C250389224%7C251366263%7C8576706)
- **Main Software** and **Patch** downloaded: [Software Download](Software Download.md)
- **Management IPs** of the **Controllers** (given by customer)
- **Ethernet** (RJ45) Cable for connection

---

### **Tasks**

1. Connect to the **Controller** through the RJ45 cable
2. Open the **SmartKit** Software
3. Add the device if it's not there already in **Devices** > **Add**:

   - **IP**: Use the management IP of the controller
   - **User**: admin
   - **Pass**: Admin Password (given by customer)
     ![MainUpgrade001.png](..\Images\MainUpgrade001.png)
4. Go to **Upgrade/Patch Installation** > **Device Upgrade** > **Upgrade Policy Setting**
   ![MainUpgrade002.png](..\Images\MainUpgrade002.png)
5. Select the **Device** to update
   ![MainUpgrade003.png](..\Images\MainUpgrade003.png)
6. Select **Upgrade Storage Device**
   ![MainUpgrade004.png](..\Images\MainUpgrade004.png)
7. Browse for the **Main Update** file and press **Finish**
   ![MainUpgrade005.png](..\Images\MainUpgrade005.png)
8. Click **Modify** and select the **Patch Update** to include the **Patch** after the **Main Update** finishes
   ![MainUpgrade006.png](..\Images\MainUpgrade006.png)
9. Click **OK** to start the **Device Upgrade**
