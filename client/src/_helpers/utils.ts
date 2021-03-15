import { ChangeEvent, useState } from "react";

export const usePasswordStrength = (e: ChangeEvent<HTMLInputElement>) => {
  const [status, setStatus] = useState("");

  const { value, max } = cancelateComplexity(e.target.value);

  switch (value) {
    case 1:
      setStatus("Słabe hasło");
      return { status, value, max };
    case 3:
      setStatus("Silne hasło");
      return { status, value, max };
    case 5:
      setStatus("Bardzo silne hasło");
      return { status, value, max };
    default:
      setStatus("no password");
      return { status, value, max };
  }
};

export function cancelateComplexity(password: string) {
  let complexity = 0;
  // .reduce

  let regExps = [/[a-z]/, /[A-Z]/, /[0-9]/, /.{6}/, /[!-//:-@[-`{-}ÿ]/];

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
