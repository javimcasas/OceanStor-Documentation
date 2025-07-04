## 1. Gather Required Tools and Information

- **Serial cable**: Typically an RJ45-to-DB9 or USB-to-serial cable.
- **Terminal emulator software**: Such as PuTTY, SecureCRT, or Tera Term.
- **Switch default credentials**: Usually `admin` for the username and pass `Huawei@123`
- **IP addressing plan**: Decide on the management IP addresses for the switch and OceanStor systems.
- **Network topology**: Understand how the switch will connect to the OceanStor system

## 2. Connect to the Switch via Serial Console

### Connect the serial cable:

- Plug the RJ45 end into the console port of the switch.
- Connect the other end (DB9 or USB) to your laptop or PC.

### Configure the terminal emulator:

- Open your terminal emulator software.
- Set the connection type to **Serial**.

### Configure the serial port settings:

- **Baud rate**: 9600
- **Data bits**: 8
- **Parity**: None
- **Stop bits**: 1
- **Flow control**: None

Power on the switch (if not already powered) and establish the connection.

## 3. Log in to the Switch

- Press Enter to activate the console.
- If prompted, enter the default username (`admin`) and password (`Admin@123` or leave blank if no password is set).
- You should now see the command-line interface (CLI) prompt.

## 4. Configure Basic Switch Settings

- Enter system view:

      ```system-view```

- Set the switch hostname (optional but recommended):

    ```sysname SWITCH_NAME```

- Set the system time:
     - Configure the time zone:

         ```clock timezone TIMEZONE_NAME offset```

     - Synchronize time with an NTP server (optional but recommended):

         ```ntp-service unicast-server NTP_SERVER_IP```
		 
- Save the configuration:

  	```save```
