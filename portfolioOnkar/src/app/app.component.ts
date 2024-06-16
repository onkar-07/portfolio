import {
  Component,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnChanges {
  title = 'portfolioOnkar';

  constructor(public activatedroute: ActivatedRoute) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('this.activated Route', this.activatedroute);
  }
}
