import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SummaryDetailComponent} from './summary-detail/summary-detail.component';
import {SummuriesComponent} from './summuries/summuries.component';

const routes: Routes = [
  {path: 'summary-detail', component: SummaryDetailComponent},
  {path: '', component: SummuriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
