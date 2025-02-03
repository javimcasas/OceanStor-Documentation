
### Definition

When customer forgets their admin user password or we configure it incorrectly, we can change the password of the user to a new one.

### Solution

1. Connect through the Serial port of the storage cabinet (with serial cable)
2. Open **PuTTY** software
3. Select **Serial** connection mode
4. Input Speed of **115200**
5. Press ' **Open** ' to connect to the cabinet
6. Log in with the following credentials:

   * User: _super_admin
   * Pass: Admin@revive
7. Input **initpasswd**
8. Enter the following data:

   * **User** : admin
   * **Password** : NewPasswordForCabinet
   * **ConfirmPassword** : NewPasswordForCabinet
9. Try connecting again to the cabinet with the admin user
