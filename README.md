# retotecnico-cobol
prueba tecnica cobol
# Reto Técnico: Procesamiento de Transacciones Bancarias 

## 📌 Introducción
Este proyecto es una aplicación de línea de comandos  en **Node.js** que procesa un archivo CSV con transacciones bancarias y genera un reporte con:
- **Balance Final:** Créditos menos Débitos.
- **Transacción de Mayor Monto:** ID y valor de la transacción más alta.
- **Conteo de Transacciones:** Número total de créditos y débitos.

# 🚀 Instalación y Ejecución
## Tener insatalado Node.js en la computadora (https://nodejs.org/en)
### 1️⃣ Clonar el repositorio ó descargar el zip desde la direccion (https://github.com/jorgeenrique1988/retotecnico-cobol)

* git clone https://github.com/jorgeenrique1988/retotecnico-cobol.git (usar terminal)
* cd retotecnico-cobol

luego iniciar el codigo (comando) : 
node Procesador.js

### 2️⃣ Funciona utilizando el archivo .csv en la carpeta (puede crear un archivo `transacciones.csv` nuevo o modificar el mismo)
```csv
id,tipo,monto
1,Crédito,100.00
2,Débito,50.00
3,Crédito,200.00
4,Débito,75.00
5,Crédito,150.00
```

### 3️⃣ Ejecutar el script (puede hacese desde el editor de codigos de su elección)
```Abrir la apliacion , abrir el codigo y abrir el terminal
(nombre de la carpeta DONDE se encuentra el codigo)
ejemplo  :C:\Users\****\Desktop\etc 
node Procesador.js
```

## 🛠️ Enfoque y Solución
- Se usa `fs` para leer el archivo CSV.
- Se usa `parser` para transformar el archivo CSV a lenguaje JS
- Se parsean los datos y se calculan los valores requeridos (filtrando y reduciendo a numeros los datos del archivo).
- Se formatea la salida en la terminal para mayor claridad.

## 📂 Estructura del Proyecto
```
├── Procesador.js   # Código principal
├── transacciones.csv  # Datos de prueba
|__ transacciones .txt # Datos en formato texto
└── README.md  # Documentación del proyecto
```

## 📝 Comentarios
El código está documentado con comentarios explicativos en cada paso clave.
