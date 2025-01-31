### Authorization Fail on DeviceManager
#### Definition
After inputting LDAP data on the DeviceManager configuration (see XFILE) and clicking on '**Test**', the user receives an error message.
#### Solution
1. Check if the Firewall is okey and that LDAP ports are opened:
	- Access through SSH to the storage array
	- Change to developer mode: ``change user_mode current_mode user_mode=developer``
	- Try pinging external IPs: ``ping --vrf vrf-srv -I CabinIP TargetIP``
	- If ping is not reaching, try changing the Firewall Configuration until it's correct
2. Make sure that LDAP configuration is correctly specified:
	- Enter LDAP server and check the properties of the user
	- Make sure that all paths and references are exactly as described in the server (LDAP is case sensitive)