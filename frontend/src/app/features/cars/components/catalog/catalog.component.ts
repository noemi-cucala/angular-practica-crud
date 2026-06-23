import { Component, DestroyRef, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { BrandsService } from '../../../../core/services/brands/brands.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Model } from '../../../../core/models/model.dto';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

interface CarsFilters {
  brand?: string;
  model?: string;
}

@Component({
  selector: 'app-catalog',
  imports: [ AsyncPipe, ReactiveFormsModule ],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit, OnDestroy{

  private brandsService = inject(BrandsService);
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  @Output() notify: EventEmitter<CarsFilters> = new EventEmitter<CarsFilters>();

  brands = toSignal(this.brandsService.getBrands());
  models$: Observable<Model[]> | undefined;
  /*brandsModel= signal({
    brandId: '',
    modelId: ''
  });
    
  brandsForm = form(this.brandsModel);*/

  brandsForm= this.fb.group({
    brandId: [''],
    modelId: [{value: '', disabled: true}]
  });

  brandControl = this.brandsForm.get('brandId');
  modelControl = this.brandsForm.get('modelId');

  ngOnInit(): void {
    this.brandControl?.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(brand => {
        this.modelControl?.reset('', { emitEvent: false });

        if(brand){
          this.getModels(brand);    
          this.modelControl?.enable({ emitEvent: false });    
        } else {
          this.modelControl?.disable({ emitEvent: false });    
        }
      });

    this.brandsForm.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {           
        this.notifyParent();    
      });
  }

  ngOnDestroy(): void {

  }

  getModels(brandId: string) {
    this.models$ = this.brandsService.getModels(brandId);
  }

  notifyParent() {
    const filters: CarsFilters = {
      ...this.brandControl?.value !== '' && { brand: this.brandControl?.value?.toString() },
      ...this.modelControl?.value !== '' && { model: this.modelControl?.value?.toString() }
    };    
    this.notify.emit(filters);
  }
  
  resetForm() {
    this.brandsForm.reset();
  }
}
