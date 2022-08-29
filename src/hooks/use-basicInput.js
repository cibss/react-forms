import { useState } from "react";

const useBasicInput = (validateValue) => {
  const [enteredValue, setEnteredvalue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredvalue(e.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true);
  }

  const reset = () => {
    setEnteredvalue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useBasicInput;