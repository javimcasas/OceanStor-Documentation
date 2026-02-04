### Definition

The Snapshots are a data protection technology. They are point-in-time copies of a specific File System. They can be used to recover data, to perform a rollback on the Protection Group, or to store a specific state of the storage device.

It is possible to create Snapshots when the Storage System has HyperMetro configured. In this case, the Snapshots are stored on both devices for high availability and the HyperMetro pair is selected.

---

### Requirements

- Protection Group created
- HyperMetro Pair created (only for devices in HyperMetro)

### Tasks

1. Enter the Device Manager (https://192.168.128.101 or the management IP)
2. Go to **Data Protection** > **Protection Groups**
   ![Snapshot_PG001.png](../../Images/Snapshot_PG001.png)
3. Click '**Snapshot CGs**' on the top navigation bar
4. Click the '**Create**' button
   ![Snapshot_PG002.png](../../Images/Snapshot_PG002.png)
5. Fill out the data:

   - **PG**: Add the PG that will have a Snapshot created. In case the Devices are on HyperMetro, the Snapshot must be created from the HyperMetro CGs.
   - **Owning vStore**: vStore that hosts the Snapshot
   - **Creation Mode**:
     - **New Snapshot**: A new Snapshot (LUN Group) is created.
     - **Select a target LUN Group**: A LUN Group is selected to become the snapshot.
   - **Name**: Descriptive name for the Snapshot
   - **Description**: Snapshot description
     ![Snapshot_PG003.png](../../Images/Snapshot_PG003.png)
