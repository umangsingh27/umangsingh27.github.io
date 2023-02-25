import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const Materialcomponents = [
  MatButtonModule,
  MatCardModule,
  MatIconModule
];

@NgModule({
  imports: [Materialcomponents],
  exports: [Materialcomponents]
})
export class MaterialsModule { }
