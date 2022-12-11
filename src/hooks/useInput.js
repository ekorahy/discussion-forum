import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChang({ target }) {
    setValue(target.value);
  }

  return [value, setValue];
}

export default useInput;
