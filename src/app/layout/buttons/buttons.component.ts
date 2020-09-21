import { Store } from '@ngrx/store';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { MainState } from 'src/app/sdk/model';
import { CalculatorAction } from 'src/app/sdk/calculator/action';

@Component({
  selector: 'calculator-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsComponent implements OnInit {
  @HostBinding('class') hostClass = 'calculator-buttons';

  constructor(private store: Store<MainState>) {}

  ngOnInit(): void {}

  // TODO: Logic shouldn´t be triggered here directly
  onClickButton(value: string): void {
    if (value === '=') {
      this.store.dispatch(CalculatorAction.calculateOperation());
      return;
    }

    if (value === 'C') {
      this.store.dispatch(CalculatorAction.clearValue());
      return;
    }

    this.store.dispatch(CalculatorAction.appendValue(value));
  }
}
