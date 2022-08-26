import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentsDepotLibraryComponent } from './angular-components-depot-library.component';

describe('AngularComponentsDepotLibraryComponent', () => {
  let component: AngularComponentsDepotLibraryComponent;
  let fixture: ComponentFixture<AngularComponentsDepotLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularComponentsDepotLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularComponentsDepotLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
