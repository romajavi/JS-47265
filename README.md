- 👋 Hi, I’m @romajavi

Para esta primera entrega de proyecto realicé un simulador de pretamos personales, donde en principio y por medio de -alert- se saluda al usuario y se le indican las intrucciones para simular su prestamo. 

- Se estableció una tasa de interés mesual de 20% donde a 20 se divide entre 100 para tener el valor procentual y luego entre 12 para obtener el interés mensual.
- Para el cálculo de la cuota mensual se multiplica el monto del préstamo por la tasa de interés mensual y luego se divide el resultado entre la diferencia entre 1 y el resultado de elevar (1 + tasaInteresMensual) a la potencia negativa del plazo, asi se tiene en cuenta la tasa de interés y el plazo del préstamo para determinar el monto de los pagos mensuales necesarios para pagar el préstamo en su totalidad.
- Para mostrar detalle del prestamos solicitado utilizamos un -alert- con el monto solicitado del prestamo, la tasa de interes del 20%, el plazo en meses y el valor de la cuota mensual, con .tofixed redondeamos las cifras numericas.
- Para los resultados que se ven mes a mes repidiendo con for utilizamos -alert- y en el se muestra mes a mes detalle del interés, capital y saldo pendiente.  