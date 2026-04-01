import { Routes } from '@angular/router';
import { PortfolioBodyComponent } from './portfolio/components/portfolio-body/portfolio-body.component';

export const routes: Routes = [
  {
    path: '**',
    component: PortfolioBodyComponent
  }
  
];
