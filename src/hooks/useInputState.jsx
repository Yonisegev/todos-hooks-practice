import { useState } from 'react';
export const useInputState = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (ev) => {
    setValue(ev.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};
