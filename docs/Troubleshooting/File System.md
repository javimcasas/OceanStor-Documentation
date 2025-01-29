### File System Not Reachable
#### Definition
Try pinging through the same VLAN the IPs of the Logical Ports associated to the File System in the storage array, if they are not accessible, the client won't be able to access their Shares
#### Solution
1. If ping is failing, check the configuration of the logical ports. Make sure the correct ports were bonded and are up with the correct IPs
2. If the packets are going through the VLAN, make sure that the Switch ingestion mode is set to the same as the Huawei Storage Arrays