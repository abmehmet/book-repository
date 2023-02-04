import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {SummaryService} from '../summary.service';
import {MatDialog} from '@angular/material/dialog';
import {QuestiondialogComponent} from './questiondialog/questiondialog.component';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.scss']
})
export class SummariesComponent implements OnInit {
  bookNameModel!: '';
  bookSummaryModel!: '';

  constructor(public summaryService: SummaryService, public matDialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  createSummary(): void {
    this.summaryService.createSummary(this.bookNameModel, this.bookSummaryModel);
  }

  showNumber(id?: number): void {
    Swal.fire('Özet Numarası > ' + id);
  }

  deleteSummary(summaryId?: number): void {
    this.openDialog();
  }

  openDialog(): boolean {
    this.matDialog.open(QuestiondialogComponent);
    return true;
  }

}
