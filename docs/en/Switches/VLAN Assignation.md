### **Requirements**
- Serial / SSH connection to the switch
- VLAN for the interfaces(s)
- Interface(s) to assign the VLAN

### **Tasks**
1. Login to the switch

2. Enter System Mode:
	`system-view`

3. Create the VLAN:
	`vlan XX`

4. List the interfaces:
	`display interface brief`

5. Configure interfaces as Trunk and allow the VLAN:
	`interface range INTERFACE1 to INTERFACE2` [e.g. 25GE1/0/1 to 25GE1/0/4]
	`port link-type trunk`
	`port trunk allow-pass vlan 70`

6. Save changes:
	`save`

7. Verify the configuration:
	`display interface PORT1`
	`display vlan XX`