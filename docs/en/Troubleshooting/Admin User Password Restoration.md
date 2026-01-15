### Definition

When the customer forgets the administrator user password or it has been configured incorrectly, we can reset the user password to a new one.

### Solution

1. Connect through the serial port of the storage cabinet (using a serial cable).
2. Open the **PuTTY** software.
3. Select the **Serial** connection mode.
4. Enter the speed **115200**.
5. Click **Open** to connect to the cabinet.
6. Log in using the following credentials:<br>
   -**User**: `_super_admin_`<br>
   -**Password**: `Admin@revive`<br>

      **EXTREME CAUTION**  
       If the `_super_admin` password has been lost, lock the user by attempting to log in several times and press the power button of the storage cabinet twice within less than 2.5 seconds.

7. Execute the following command:

    `initpasswd`

8. Enter the following information:<br>
   -**User**: `admin`<br>
   -**Password**: `NewPasswordForCabinet`<br>
   -**Confirm password**: `NewPasswordForCabinet`<br>  
9. Try to reconnect to the storage cabinet using the administrator user.
