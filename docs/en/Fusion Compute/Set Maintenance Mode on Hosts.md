### Definition

Maintenance mode is used to isolate the host from the entire system. In this way, maintenance operations, such as parts replacement, power-off or restarting can be performed on the host without affecting system services.

It is recommended to migrate all VMs on the Host **before** entering maintenance mode. No VMs can be created, started or migrated on a host in maintenance mode.

### Tasks

1. Access **Resource Pool**
2. Select the host to enter **Maintenance Mode**![HostMaintenance001](../../Images/HostMaintenance001.png)


3. Click **Enter Maintenance Mode**
   ![HostMaintenance002](../../Images/HostMaintenance001.png)
8. Select **Migrate all VMs on the host** and click **OK**
   	![HostMaintenance003](../../Images/HostMaintenance003.png)
9. Wait for the migration to be completed and start performing host operations. Maintenance mode can be stopped by clicking **Exit Maintenance Mode**
