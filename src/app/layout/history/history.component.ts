import { Store, select } from '@ngrx/store';
import { MainState } from './../../sdk/model';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { CalculatorSelector } from 'src/app/sdk/calculator/selector';

@Component({
  selector: 'calculator-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent implements OnInit {
  @HostBinding('class') hostClass = 'calculator-history';

  readonly lastOperations$ = this.store.pipe(
    select(CalculatorSelector.selectLatestOperations)
  );
  constructor(private store: Store<MainState>) {}

  ngOnInit(): void {}
}
