import { ChangeEvent, useState } from 'react';

export const usePasswordStregth = (e: ChangeEvent<HTMLInputElement>) => {
  const [status, setStatus] = useState('');

  const { value, max } = canculateComplexity(e.target.value);

  switch (value) {
    case 1:
      setStatus('Słabe hasło');
      return { status, value, max };
    case 3:
      setStatus('Silne hasło');
      return { status, value, max };
    case 5:
      setStatus('Bardzo silne hasło');
      return { status, value, max };
    default:
      setStatus('no password');
      return { status, value, max };
  }
};

export const chunkArrayWithSlice = (
  arr: Array<{}>,
  amountInChunk: number,
  index: number = 15
) => {
  // .reduce
  let chunk: number = 0;
  if (arr.length < index) {
    return 1;
  } else
    while (chunk < arr.length / amountInChunk) {
      chunk++;
    }
  return chunk;
};

export function canculateComplexity(password: string) {
  var complexity = 0;
  // .reduce

  var regExps = [/[a-z]/, /[A-Z]/, /[0-9]/, /.{6}/, /[!-//:-@[-`{-}ÿ]/];

  regExps.forEach((regexp) => {
    if (regexp.test(password)) {
      complexity++;
    }
  });
  return {
    value: complexity,
    max: regExps.length,
  };
}
