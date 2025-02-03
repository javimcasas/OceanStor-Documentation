
### **Selección del Modelo de Switch**

1. Selecciona el tipo de Switch para representar en el diseño (FC / IP)
2. Arrastra y coloca el Switch sobre el lienzo
   ![SwitchSelection001](../../Images/SwitchSelection001.png)
3. Completa la información:

   * **Nombre** : Nombre descriptivo para el Switch
   * **Modelo del Dispositivo** : Dado por el cliente
   * **SN** : Incluye opcionalmente el ESN del Switch
4. Haz clic en ' **OK** ' para crear el Switch
   ![SwitchSelection002](../../Images/SwitchSelection002.png)
5. Duplica el Switch (redundancia) haciendo clic derecho sobre el Switch y copiando y pegando en el lienzo
   ![SwitchSelection003](../../Images/SwitchSelection001.png)
   ![SwitchSelection004](../../Images/SwitchSelection004.png)
6. Renombra el switch duplicado con un nombre descriptivo (sigue la numeración de mejores prácticas: XXXX001)

---

### **Conexión del Switch al Gabinete de Almacenamiento**

1. Haz clic en el **Punto** sobre el Switch y arrastra la conexión al Punto sobre el Gabinete
   ![SwitchConnection001](../../Images/SwitchConnection001.png)
2. Haz clic en el **Puerto** deseado del Switch y arrastra la conexión al **Puerto del Módulo de Interfaz**
   ![SwitchConnection002](../../Images/SwitchConnection002.png)
3. Asegúrate de crear un enlace **redundante** con los Módulos de Interfaz para seguir las mejores prácticas
   ![SwitchConnection003](../../Images/SwitchConnection003.png)
4. Haz clic en ' **OK** ' para finalizar la conexión del cable
5. Repite el proceso para el segundo switch para redundancia
   ![SwitchConnection004](../../Images/SwitchConnection004.png)
6. El resultado final debe verse de esta manera:
