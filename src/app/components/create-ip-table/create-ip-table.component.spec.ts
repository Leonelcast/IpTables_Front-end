import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIpTableComponent } from './create-ip-table.component';

describe('CreateIpTableComponent', () => {
  let component: CreateIpTableComponent;
  let fixture: ComponentFixture<CreateIpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIpTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
