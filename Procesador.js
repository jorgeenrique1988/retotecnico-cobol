const fs = require('fs'); //Modulo para interactuar con archivos
const csv = require('csv-parser'); //Modulo para manejar archivos csv en javascript

function leerCSV(nombreArchivo) {
    return new Promise((resolve, reject) => {
        let transacciones = [];
        fs.createReadStream(nombreArchivo) // Abre el archivo como stream
            .pipe(csv())// Pasa los datos al parser CSV
            .on('data', (fila) => {
                fila.monto = parseFloat(fila.monto); // Convertimos a número
                transacciones.push(fila);
            })
            .on('end', () => resolve(transacciones)) // Cuando termine, devuelve los datos
            .on('error', (error) => reject(error));
    });
}

// Prueba de lectura
leerCSV('transacciones.csv').then(data => console.log(data));
function calcularBalance(transacciones) {
    let totalCredito = transacciones
        .filter(t => t.tipo === "Crédito") // Filtra los créditos
        .reduce((acc, t) => acc + t.monto, 0); // Suma los montos

    let totalDebito = transacciones
        .filter(t => t.tipo === "Débito") // Filtra los débitos
        .reduce((acc, t) => acc + t.monto, 0);  // Suma los montos

    return totalCredito - totalDebito;
}
function transaccionMayor(transacciones) {
    let mayor = transacciones.reduce((max, t) => (t.monto > max.monto ? t : max), transacciones[0]); //Encontrar la Transacción de Mayor Monto
    return { id: mayor.id, monto: mayor.monto };
}
function contarTransacciones(transacciones) {
    let conteo = { Crédito: 0, Débito: 0 };
    transacciones.forEach(t => conteo[t.tipo]++); // Cuenta los tipos de transacción
    return conteo;
}
async function generarReporte(nombreArchivo) {
    try {
        let transacciones = await leerCSV(nombreArchivo);
        let balance = calcularBalance(transacciones);
        let { id, monto } = transaccionMayor(transacciones);
        let conteo = contarTransacciones(transacciones);

        console.log("\nReporte de Transacciones");
        console.log("---------------------------------------------");
        console.log('✅ Lectura finalizada. Total de transacciones:', transacciones.length);
        console.log(`Balance Final: ${balance.toFixed(2)}`); // Resultado:(Siempre 2 decimales, mejor presentación)
        console.log(`Transacción de Mayor Monto: ID ${id} - ${monto.toFixed(2)}`); // Resultado:(Siempre 2 decimales, mejor presentación)
        console.log(`Conteo de Transacciones: Crédito: ${conteo.Crédito} Débito: ${conteo.Débito}`);
    } catch (error) {
        console.error("Error al procesar el archivo:", error);
    }
}

// Ejecutar el programa
generarReporte('transacciones.csv');
