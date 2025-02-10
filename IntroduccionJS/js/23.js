const metodoPago = 'Tarjeta';

switch(metodoPago){
    case 'Tarjeta':
        console.log(`Pagaste con Tarjeta.`);
        break;
    case 'Efectivo':
        console.log(`Pagaste con Efectivo.`);
        break;
    case 'Cheque':
        console.log(`Pagaste con Cheque, revisaremos tus fondos.`);
        break;
    default:
        console.log(`Aún no has pagado.`);
        break;
}