import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOwnCustomMaterialModule } from './material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [SidebarComponent],
    imports: [ CommonModule, RouterModule,  MyOwnCustomMaterialModule ],
    exports: [SidebarComponent],
    providers: [],
})
export class SharedModule {}
