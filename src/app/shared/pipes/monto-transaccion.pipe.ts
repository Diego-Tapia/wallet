import { Pipe, PipeTransform } from '@angular/core';
import { ITransferenciaRes } from '../models/transferencia.interface';
import { IUserId } from '../models/user-id.interface';

@Pipe({
  name: 'montoTransaccion'
})
export class MontoTransaccionPipe implements PipeTransform {

  transform(value: string, args: montoPipe): string {
    if((args.transaction.transactionType.name == 'TRANSFER' && args.user?.walletId == args.transaction.walletFrom) || 
        args.transaction.transactionType.name == 'PAYMENT' || 
        args.transaction.transactionType.name == 'INDIVIDUAL_DECREASE' || 
        args.transaction.transactionType.name == 'MASSIVE_DECREMENT' || 
        args.transaction.transactionType.name == 'SELL') return `(${value})`
    else return value
  }

}


interface montoPipe {
  transaction: ITransferenciaRes,
  user: IUserId | undefined
}