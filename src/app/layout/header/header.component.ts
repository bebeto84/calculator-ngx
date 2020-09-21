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
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { MainState } from 'src/app/sdk/model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'calculator-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class') hostClass = 'calculator-header';
  @Output() historyClicked = new EventEmitter<void>();

  data$$: Subscription | undefined;
  hasNotPreviousOperations = false;
  readonly isPortrait$ = this.breakpointObserver
    .observe(['(orientation: portrait)'])
    .pipe(map(({ matches }) => !matches));

  constructor(
    private store: Store<MainState>,
    private breakpointObserver: BreakpointObserver,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.data$$ = this.store
      .pipe(
        select(CalculatorSelector.selectCountOperations),
        tap(
          (countOperations) =>
            (this.hasNotPreviousOperations = countOperations === 0)
        )
      )
      .subscribe(() => this.changeDetector.markForCheck());
  }

  ngOnDestroy(): void {
    this.data$$?.unsubscribe();
  }
}
