import { NgModule } from '@angular/core';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';



@NgModule({
    declarations : [
        NotpagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent

    ],
    exports : [
        NotpagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent

    ]
})

export class SharedModule { }
