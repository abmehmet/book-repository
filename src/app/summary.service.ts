import {Injectable} from '@angular/core';
import {Summary} from './summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  summaries: Summary[] = [];
  lastId = 2;

  constructor() {
    this.intiData();
  }

  intiData(): void {
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

  createSummary(bookNameModel: string, bookSummaryModel: string): Summary {
    const summary: Summary = {};
    this.lastId = this.lastId + 1;
    summary.id = this.lastId;
    summary.bookSummary = bookNameModel;
    summary.bookName = bookSummaryModel;
    this.summaries.push(summary);
    return summary;
  }

  getSummary(id: number): Summary | undefined {
    return this.summaries.find(value => value.id === id);
  }

  setSummary(id: number, summary: Summary): boolean {
    const index = this.summaries.findIndex(value => value.id === id);
    if (index !== undefined) {
      this.summaries[index].bookName = summary.bookName;
      this.summaries[index].bookSummary = summary.bookSummary;
      return true;
    }
    return false;
  }
}
