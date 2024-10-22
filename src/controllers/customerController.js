import { pool } from "../../src/db.js";

// Renderizar clientes (usuarios) desde la tabla Usuario
export const renderCustomers = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM customer");
      res.render("customers", { customers: rows });
    } catch (err) {
      console.error("Error al realizar la consulta:", err); // Esto imprimirá el error en la consola
      res.status(500).send("Error en la consulta"); // Responderá con un error 500
    }
}

// Crear un nuevo usuario en la tabla Usuario
export const createCustomers = async (req, res) => {
    try {
        console.log('Esta entrando al método de creación');
        const { NomUsuario, Gmail, Telefono } = req.body;

        // Insertar el nuevo usuario en la base de datos
        await pool.query("INSERT INTO Usuario (NomUsuario, Gmail, Telefono) VALUES (?, ?, ?)", [NomUsuario, Gmail, Telefono]);
        
        // Redirigir a la página principal después de la inserción
        res.redirect("/");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el usuario");
    }
};
