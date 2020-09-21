import { Store, select } from '@ngrx/store';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { CalculatorSelector } from '../sdk/calculator/selector';
import { MainState } from '../sdk/model';

@Component({
  selector: 'calculator-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  @HostBinding('class') hostClass = 'calculator-layout';

  readonly lastOperationsCount$ = this.store.pipe(
    select(CalculatorSelector.selectCountOperations)
  );

  constructor(private store: Store<MainState>) {}

  ngOnInit(): void {}
}
