'use client'

import {
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from 'input-otp'

type Patterns =
  | 'REGEXP_ONLY_CHARS'
  | 'REGEXP_ONLY_DIGITS'
  | 'REGEXP_ONLY_DIGITS_AND_CHARS'

export const patterns = <Record<Patterns, string>>{
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
}
