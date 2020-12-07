export const useCallbackCode = 
`const memoizedFunction = useCallback(
  (optionalParam) => someSeriousCalculations(),
  [modifiedVariable] // when this variable gets changed function will run
);`;
