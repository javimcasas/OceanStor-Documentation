
### Definition

For OceanStor Pacific devices, the deployment consists on the creation of a Storage Cluster using the Pacific nodes from the devices.

---

### Requirements

- DeviceManager client
- LLD Deployment Document (see: [Configure Scale-Out Storage Project](Configure Scale-Out Storage Project))
- SmartKit Scale Out Tools

---

### Tasks

1. Open SmartKit **Scale-Out Storage Deployment** tool:

   ![ScaleOutDeployment001.png](../../Images/ScaleOutDeployment001.png)
2. Select **Scale-Out Storage Deployment Delivery**:

   ![ScaleOutDeployment002.png](../../Images/ScaleOutDeployment002.png)
3. Press **Create Task** button:

   ![ScaleOutDeployment003.png](../../Images/ScaleOutDeployment003.png)
4. Select **Network Initialization** scenario and press **Create Task**:

   ![ScaleOutDeployment004.png](../../Images/ScaleOutDeployment004.png)
5. Select the **Storage Software Version** and import the **LLD Deployment Document**:

   ![ScaleOutDeployment005.png](../../Images/ScaleOutDeployment005.png)
6. Select the **Devices** for the operation and press **Next**:

   ![ScaleOutDeployment006.png](../../Images/ScaleOutDeployment006.png)
7. Confirm the operation and press **Execute Task**:

   ![ScaleOutDeployment007.png](../../Images/ScaleOutDeployment007.png)
8. Wait for completion and close the tool:

   ![ScaleOutDeployment008.png](../../Images/ScaleOutDeployment008.png)
9. Access the **OceanStor-Pacific_X.X.X_DeviceManagerClient** directory.
10. Execute the `run.bat` file inside of the directory.
11. Inside of the web browser, select **Pre-installation** as the **Installation Mode**:

    ![ScaleOutDeployment009.png](../../Images/ScaleOutDeployment009.png)
12. Upload the **LLD Template** and press **Deploy**:

    ![ScaleOutDeployment010.png](../../Images/ScaleOutDeployment010.png)
13. Wait for the deployment to finish and access the **DeviceManager** cluster IP for confirmation.
