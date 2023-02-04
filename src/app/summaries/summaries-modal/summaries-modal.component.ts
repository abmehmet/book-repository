import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SummaryService} from '../../summary.service';
import {Summary} from '../../summary';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-summaries-modal',
  templateUrl: './summaries-modal.component.html',
  styleUrls: ['./summaries-modal.component.scss']
})
export class SummariesModalComponent implements OnInit {
  summaryForm = this.fb.group({
    bookName: ['', Validators.required],
    bookSummary: ['', Validators.required]
  });
  summaryId = Number(this.route.snapshot.paramMap.get('id'));
  disableSelect = new FormControl(true);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private summaryService: SummaryService) {
  }

  ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    const summary = this.summaryService.getSummary(this.summaryId);
    if (summary) {
      console.log(summary);
      this.summaryForm.patchValue({
        bookName: summary.bookName,
        bookSummary: summary.bookSummary
      });
    }
  }

  onSubmit(): void {
    const summary = Object.assign({}, this.summaryForm.value);
    const summary2: Summary = this.summaryForm.getRawValue();
    if (this.summaryService.setSummary(this.summaryId, summary)) {
      Swal.fire('Değiştirildi');
    } else {
      Swal.fire('Bir hata meydana geldi');
    }

  }
}
