import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { PortfolioBodyComponent } from './portfolio/components/portfolio-body/portfolio-body.component';

export const routes: Routes = [
  {path: '**',
    component: PortfolioBodyComponent
  }
];
