import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {SummaryDetailComponent} from './summary-detail/summary-detail.component';
import {SummariesComponent} from './summaries/summaries.component';
import {SummariesModalComponent} from './summaries/summaries-modal/summaries-modal.component';
import {QuestiondialogComponent} from './summaries/questiondialog/questiondialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    SummariesComponent,
    SummaryDetailComponent,
    SummariesModalComponent,
    QuestiondialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
    FormsModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
