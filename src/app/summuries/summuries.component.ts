import {Component, OnInit} from '@angular/core';
import {Summary} from '../summary';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-summuries',
  templateUrl: './summuries.component.html',
  styleUrls: ['./summuries.component.scss']
})
export class SummuriesComponent implements OnInit {
  lastId = 2;
  bookNameModel!: '';
  bookSummaryModel!: '';

  summaries: Summary[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.summaries.push({
      id: 1,
      bookName: 'Gençlerle Başbaşa',
      bookSummary: 'Ali Fuad Başgil´in bu eseri, yayınlandığı günden bu yana defalarca basılmış ve her nesle ayrı ayrı seslenmiştir. ' +
        'Büyük-küçük her insana verdiği ve vermeye devam edeceği şeyler şimdi olduğu gibi, nesiller boyu da devam edecektir.'
    }, {
      id: 2,
      bookName: 'İrade Terbiyesi',
      bookSummary: 'Eğitimci Jules Payot, İrade Terbiyesi’nde, tembellikten arındırılmış sağlam bir zihni nasıl oluşturabileceğimizi anlatıyor. ' +
        'Çabalamayı asla bırakmamamızı, arzu ettiğimiz hayata ulaşabilmemiz için zaruri bir terbiyeye ihtiyacı olan irademizi ' +
        'sürekli sınavdan geçirmemizi öğütlüyor.'
    });
  }

  createSummary(): void {
    const newSummary: Summary = {
      id: ++this.lastId,
      bookSummary: this.bookNameModel,
      bookName: this.bookSummaryModel
    };

    this.summaries.push(newSummary);
  }

  clickCard(id?: number): void {
    Swal.fire('Özet numarası > ' + id);
  }

}
