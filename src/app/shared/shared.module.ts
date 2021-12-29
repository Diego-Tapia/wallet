import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { TipoTransaccionPipe } from './pipes/tipo-transaccion.pipe';
import { MontoTransaccionPipe } from './pipes/monto-transaccion.pipe';

@NgModule({
  declarations: [
    TipoTransaccionPipe,
    MontoTransaccionPipe
  ],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  exports: [
    TipoTransaccionPipe,
    MontoTransaccionPipe
  ]
})
export class SharedModule {}
