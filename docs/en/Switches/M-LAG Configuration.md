### **Requirements**
- Switches connected through 100G ports
- Management IPs of both switches 
- Management interfaces of both switches interconnected with Ethernet cable

### **Tasks**
1. Log in to **Switch A**

2. Enter System Mode:
	`system-view`

3. Configure **Virtual Spanning Tree Protocol** (**V-STP**):
	`stp mode rstp`
	`stp v-stp enable`
	`stp bdu-protection-protection`
	`stp tc-protection`

4. Configure a DFS group and bind the IPs of the Management network ports to the group:
	`dfs-group 1`
	`priority 150`
	`dual-active detection source ip MGMT_IP_A peer MGMT_IP_B`
	`authentication-mode hmac-sha256 password PASSWD`
	`peerl-link mac-address remain enable paired-port`

5. Configure a peer-link for the switch:
	`interface eth-trunk 1`
	`mode lacp-static`
	`lacp timeout fast`
	`peer-link 1`
	`port vlan exclude 1`
	`trunkport 100GE1/0/INTERFACE1`
	`trunkport 100GE1/0/INTERFACE2`

6. Log in to **Switch B**

7. Run the same commands, changing the order of MGMT_IPs on this command:
	`dual-active detection source ip MGMT_IP_B peer MGMT_IP_A`

8. Save changes:
	`save`

9. Verify MLAG status:
	`display dfs-group 1 m-lag`