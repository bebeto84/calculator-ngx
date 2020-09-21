export interface MainState {
  calculator: CalculatorState;
}

export interface CalculatorState {
  value: string;
  lastOperations: Operation[];
}

export interface Operation {
  expression: string;
  value: string;
}
