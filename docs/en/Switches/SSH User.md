### **Requirements**
- Serial connection to the switch

### **Tasks**
1. Log in to the switch

2.  Enter System Mode:
	`system-view`

3. Enter Authentication, Authorization and Accounting (AAA):
	`aaa`

4. Create local user:
	`local user sshadmin password irreversible-cipher Huawei@123`
	`local user sshadmin level 3`
	`quit`

5. Enable ssh:
	`stelnet server enable`

6. Add user to ssh:
	`ssh user sshadmin authentication-type password`
	`ssh user sshadmin service-type stelnet`

7. Add user interface:
	`user-interface vty 0 4`
	`authentication-mode aaa`
	`protocol inbound ssh`

8. SSH configurations:
	`ssh client first-time enable`
	`ssh server ip-block disable`
	`ssh server-source all-interface`

9. User configurations:
	`local-aaa-user password policy administrator`
	`undo password alert original`
	`password expire 0`

10. Save changes:
	`save`