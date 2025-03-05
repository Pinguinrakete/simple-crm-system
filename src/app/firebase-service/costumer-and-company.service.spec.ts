import { TestBed } from '@angular/core/testing';

import { CostumerAndCompanyService } from './costumer-and-company.service';

describe('CostumerAndCompanyService', () => {
  let service: CostumerAndCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumerAndCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
