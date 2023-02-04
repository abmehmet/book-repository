import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SummariesComponent} from './summaries/summaries.component';
import {SummariesModalComponent} from './summaries/summaries-modal/summaries-modal.component';

const routes: Routes = [
  {path: 'summaries', component: SummariesComponent},
  {path: 'summary-modal/:id', component: SummariesModalComponent},
  {path: '', redirectTo: '/summaries', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
