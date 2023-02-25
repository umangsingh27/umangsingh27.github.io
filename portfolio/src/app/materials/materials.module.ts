import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const Materialcomponents = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [Materialcomponents],
  exports: [Materialcomponents]
})
export class MaterialsModule { }
