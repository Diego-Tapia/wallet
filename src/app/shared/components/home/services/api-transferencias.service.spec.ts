import { TestBed } from '@angular/core/testing';

import { ApiTransferenciasService } from './api-transferencias.service';

describe('ÁpiTransferenciasService', () => {
  let service: ApiTransferenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTransferenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
