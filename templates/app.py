from flask import Flask, render_template, request
import pyodbc

app = Flask(__name__)

# Configuración de la conexión a la base de datos
connection_string = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=nombre_servidor;DATABASE=nombre_base_datos;UID=nombre_usuario;PWD=contraseña'

def get_db_connection():
    conn = pyodbc.connect(connection_string)
    return conn

# Ruta para la página de registro del cliente
@app.route('/')
def index():
    return render_template('formulario.html')



# Ruta para guardar los datos del cliente
@app.route('/guardar_cliente', methods=['POST'])
def guardar_cliente():

    ciCliente = request.form['ciCliente']
    nombreCliente = request.form['nombreCliente']
    nroHijos = request.form['nroHijos']
    estadoCivil = request.form['estadoCivil']
    correoCliente = request.form['correoCliente']
    tieneTrabajo = request.form['tieneTrabajo']
    direccionCliente = request.form['direccionCliente']

    conn = get_db_connection()
    cursor = conn.cursor()

    # Inserta los datos del cliente en la tabla correspondiente
    query = "INSERT INTO CLIENTE (ciCliente, nombreCliente, nroHijos, estadoCivil, correoCliente, tieneTrabajo, direccionCliente) VALUES ((?, ?, ?, ?, ?, ?, ?))"
    cursor.execute(query, (ciCliente, nombreCliente, nroHijos, estadoCivil, correoCliente, tieneTrabajo, direccionCliente))
    conn.commit()

    cursor.close()
    conn.close()

    return 'Datos del cliente guardados correctamente'

if __name__ == '__main__':
    app.run()
