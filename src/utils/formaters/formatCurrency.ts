/**
 * @description function to format currency values
 * @param {string} value - the value to be formatted
 * @param {FormatCurrencyOptions} countryOptions - the options to format the currency
 * @param {string} countryOptions.locale - the locale to format the currency
 * @param {string} countryOptions.currency - the currency to format the value
 * @returns {FormatCurrencyReturn} - the formatted value and the numeric value
 * @example
 * formatCurrency('1000', { locale: 'pt-BR', currency: 'BRL' })
 * // returns { parsedValue: 'R$ 1.000,00', numericValue: 1000 }
 * @example
 * formatCurrency('1000', { locale: 'en-US', currency: 'USD' })
 * // returns { parsedValue: '$1,000.00', numericValue: 1000 }
 * @example
 * formatCurrency('1000', { locale: 'en-US', currency: 'USD' })
 * // returns { parsedValue: '$1,000.00', numericValue: 1000 }
 */

const listCurrencyAvailable = [
  {
    BRL: {
      locale: 'pt-BR',
      currency: 'BRL',
    },
    USD: {
      locale: 'en-US',
      currency: 'USD',
    },
    EUR: {
      locale: 'en-US',
      currency: 'EUR',
    },
    JPY: {
      locale: 'en-US',
      currency: 'JPY',
    },
  },
]

export type FormatCurrencyOptions = 'BRL' | 'USD' | 'EUR' | 'JPY'

export type FormatCurrencyReturn = {
  parsedValue: string
  numericValue: number
}

export function formatCurrency(
  value: string,
  countryOptions: FormatCurrencyOptions = 'USD'
): FormatCurrencyReturn {
  if (!value) return { parsedValue: '', numericValue: 0 }

  let currencyOptions

  listCurrencyAvailable.find((currency) => {
    currencyOptions = currency[countryOptions]
  })

  if (!currencyOptions) {
    throw new Error(`Currency options for ${countryOptions} not found`)
  }

  const numericValue = Number(
    value.replace(/\D/g, '').replace(/(\d{2})$/, '.$1')
  )

  const parsedValue = new Intl.NumberFormat(currencyOptions['locale'], {
    style: 'currency',
    currency: currencyOptions['currency'],
  }).format(numericValue)

  return {
    parsedValue,
    numericValue,
  }
}
