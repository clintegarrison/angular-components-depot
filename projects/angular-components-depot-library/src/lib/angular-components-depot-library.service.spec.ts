import { TestBed } from '@angular/core/testing';

import { AngularComponentsDepotLibraryService } from './angular-components-depot-library.service';

describe('AngularComponentsDepotLibraryService', () => {
  let service: AngularComponentsDepotLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularComponentsDepotLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
