import { NgModule } from '@angular/core';
import { PAGES_RUOUTES } from './pages.routes';
import { FormsModule} from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
// NG2 graficas
import { ChartsModule } from 'ng2-charts';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonnaComponent } from '../components/grafico-donna/grafico-donna.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonnaComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports : [
        SharedModule,
        PAGES_RUOUTES,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule { }
