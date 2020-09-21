import { Store, select } from '@ngrx/store';
import { CalculatorSelector } from 'src/app/sdk/calculator/selector';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { MainState } from 'src/app/sdk/model';

@Component({
  selector: 'calculator-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') hostClass = 'calculator-header';
  @Output() historyClicked = new EventEmitter<void>();

  readonly lastOperationsCount$ = this.store.pipe(
    select(CalculatorSelector.selectCountOperations)
  );
  constructor(private store: Store<MainState>) {}

  ngOnInit(): void {}
}
