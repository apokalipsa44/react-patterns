export const actionsSnippets = `export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increaseCount() {
  return ({ type: INCREMENT});
}

export function decreaseCount() {
  return ({ type: DECREMENT});
}`;
