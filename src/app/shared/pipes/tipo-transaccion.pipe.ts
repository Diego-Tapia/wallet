import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoTransaccion'
})
export class TipoTransaccionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value === 'TRANSFER') return 'Transferencia'
    if(value === 'EMISION') return 'Emisión'
    if(value === 'PAYMENT') return 'Pago'
    if(value === 'INDIVIDUAL_INCREASE') return 'Incremento individual'
    if(value === 'INDIVIDUAL_DECREASE') return 'Disminución individual'
    if(value === 'MASSIVE_INCREMENT') return 'Incremento masivo'
    if(value === 'MASSIVE_DECREMENT') return 'Disminución masiva'
    if(value === 'BUY') return 'Compra'
    if(value === 'SELL') return 'Venta'
    if(value === 'EXCHANGE') return 'Intercambio'
    else return 'Movimiento'
  }

}
