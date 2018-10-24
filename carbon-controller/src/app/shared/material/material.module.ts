import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSnackBarModule,
  MatTabsModule,
  MatStepperModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatStepperModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  declarations: []
})
export class MaterialModule { }
