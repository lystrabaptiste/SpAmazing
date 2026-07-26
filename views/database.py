import mysql.connector

conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="eseeraC21@",   # Use the password you chose
    database="spamazing"
)

print("Connected successfully!")