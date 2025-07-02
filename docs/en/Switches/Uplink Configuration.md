### **Requirements**
- Serial / SSH connection the switches
- VLAN for Uplink
- Uplink Interfaces

### **Tasks**
1. Login to **Switch A**

2. Enter System Mode:
	`system-view`

3. Create Trunk:
	`interface Eth-Trunk10`
	`mode lacp`
	`mlag 10`
	`description UPLINK`
	`port link-type trunk`
	`port trunk allow-pass vlan XX`

4. Verify interfaces:
	`display interface brief`

5. Add interface(s) to the trunk:
	`interface range INT1 to INT2` or `interface INT1`
	`Eth-Trunk 10`

6. Save changes:
	`save`

7. Login to **Switch B**

8. Perform the same configurations as in **Switch A**

9. Verify the configuration:
	`display Eth-Trunk 10`
	`display mlag`
	`display interface-brief`