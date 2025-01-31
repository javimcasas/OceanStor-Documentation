### **Machine Mounting on Rack**
1. Select with the client the **spot** on the **rack** for the **machine(s)**, while taking into account:
	- **Heavy machines** should go **down** on the rack for **weight balancing**
	- Leave some **space** (1~2U) from the bottom for **easier cable management**
	- Write down in which **rack** and in which **U** is the machine installed for **documentation**
2. Install the **guides**, while taking into account:
	- **Front / Rear** sides indication **facing inwards** and correctly positioned
	- Any **screws** on the **guides** have to be **removed** before presenting it
	- Make sure to set on the front the **bottom** and the **second-from-the-top** screws
3. Slide carefully the machine into the guide until it fits
4. Screw the machine by opening the trapdoors on its sides tightly on the front and on the back
5. Following the **Low-Level Design** (LLD) connect the Controller as follows:
	- **Power**: Both power sockets on the Controller have to be connected. It is necessary to test with each one to ensure redundancy on power. One of the sockets must be connected to the right power outlet of the rack and the other to the left outlet of the rack.
	- **Management**: After configuration with PC, connect to the management cable (RJ45)
	- **Interface**: Connect with redundancy to the available switches (Fibre Optic cable)
	- **Expansion**: Connect with redundancy to the available, if any, DAE (SAS cable)
	- **Multiple DAEs**: If there are more that one DAE, they have to be connected in chain

### **Disk Installation**
1. Make sure that the disk(s) belong to the machine before installation
2. Depending if there is an old disk or a false disk:
	- **Empty Disk**: press with the thumb and index on the bottom and upper part of the plastic to remove the false disk
	- **Old Disk / Replacement**: Press on the **green line** up on the **Old Disk**, the plastic front will move backwards. After that, remove the disk
3. Press on the **green line** up on the **New Disk**, the plastic front will move backwards
4. Slide the disk on the empty slot until it clicks and the front places itself straight
5. Wait for the LEDs indicators to light up to ensure the connection
6. If there is access to the Controller through the PC, connect to the **Management Port** and open **Device Manager**
7. Enter **System** > **Hardware** > **Devices**
8. Check through the **Controller Enclosure** or the **Disk Enclosure** (depends where the disks are mounted) if the newly installed disk(s) are there. If the disk(s) don't appear try waiting a bit for the system to recognize them and refresh the Device Manager.