import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule],
})
export class SharedModule {}
