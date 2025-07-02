### **Requirements**
- Serial connection to the switch
- Management IP given by customer

### **Tasks**
1. Login to the switch

2. Enter System Mode:
	`system-view`

3. Add the IP to the interface:
	`interface MEth0/0/0`
	`ip address MGMT_IP SUBNET_MASK`

4. Set Gateway:
	`ip route-static 0.0.0.0 0.0.0.0 GATEWAY_IP`

5. Save the changes:
	`save`

6. Verify the assignation:
	`display this` or `display current_configuration interface MEth0/0/0`