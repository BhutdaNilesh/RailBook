import { TestBed } from '@angular/core/testing';

import { RoleDefineService } from './role-define.service';

describe('RoleDefineService', () => {
  let service: RoleDefineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleDefineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
