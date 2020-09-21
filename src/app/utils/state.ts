export function updateState<TState>(
  state: TState,
  changes: Partial<TState>
): TState {
  return Object.assign({}, state, changes) as TState;
}
