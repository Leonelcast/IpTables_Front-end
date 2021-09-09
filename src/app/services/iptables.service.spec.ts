import { TestBed } from '@angular/core/testing';

import { IptablesService } from './iptables.service';

describe('IptablesService', () => {
  let service: IptablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IptablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
