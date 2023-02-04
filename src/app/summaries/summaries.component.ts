import {Component, OnInit} from '@angular/core';
import {Summary} from '../summary';
import Swal from 'sweetalert2';
import {SummaryService} from '../summary.service';

@Component({
  selector: 'app-summaries',
  templateUrl: './summaries.component.html',
  styleUrls: ['./summaries.component.scss']
})
export class SummariesComponent implements OnInit {
  bookNameModel!: '';
  bookSummaryModel!: '';

  constructor(public summaryService: SummaryService) {
  }

  ngOnInit(): void {
  }

  createSummary(): void {
    this.summaryService.createSummary(this.bookNameModel, this.bookSummaryModel);
  }

  showNumber(id?: number): void {
    Swal.fire('Özet Numarası > ' + id);
  }

  deleteSummary(summaryId?: number): void{

  }
}
