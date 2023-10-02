// Aca saludamos y explicamos el proceso:

alert("Bienvenid@ a nuestro simulador de préstamo personal con una tasa fija de interés única en el mercado de 20% anual.");
alert("Para realizar un cálculo personalizado de tu prestamos vamos a necesitar que llenes por favor los siguientes campos con la información del monto a solicitar y el plazo en meses para su devolución.");


// Para solcitar información al usuario:
let monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
let plazo = parseInt(prompt("Ingrese el plazo del préstamo en meses:"));

// Para calcular la tasa de interés mensual:
let tasaInteres = 20; 
let tasaInteresMensual = tasaInteres / 100 / 12;

// Para calcular la cuota mensual:
let cuotaMensual = monto * tasaInteresMensual /git (1 - Math.pow(1 + tasaInteresMensual, -plazo));

// Para mostrar detalle del prestamo solicitado:
alert("Monto del préstamo: $" + monto.toFixed(2));
alert("Tasa de interés anual: " + tasaInteres.toFixed(2) + "%");
alert("Plazo del préstamo: " + plazo + " meses");
alert("Cuota mensual: $" + cuotaMensual.toFixed(2));

// Para mostrar la tabla de amortización (mes a mes):
let saldoPendiente = monto;
for (let i = 1; i <= plazo; i++) {
let interes = saldoPendiente * tasaInteresMensual;
let capital = cuotaMensual - interes;
saldoPendiente -= capital;
alert("Mes " + i + ": Interés: $" + interes.toFixed(2) + ", Capital: $" + capital.toFixed(2) + ", Saldo pendiente: $" + saldoPendiente.toFixed(2));
}


