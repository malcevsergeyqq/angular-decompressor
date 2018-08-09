import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompressorComponent } from './compressor.component';

describe('CompressorComponent', () => {
  let component: CompressorComponent;
  let fixture: ComponentFixture<CompressorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompressorComponent ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
