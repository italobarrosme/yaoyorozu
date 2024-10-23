import { transformHslToHex } from '.'

describe('transformHslToHex', () => {
  it('should transform HSL to HEX', () => {
    const hsl = 'hsl(0, 100%, 50%)'
    const hex = transformHslToHex(hsl)

    expect(hex).toBe('#ff0000')
  })

  it('should throw an error if the HSL format is invalid', () => {
    const hsl = 'hsl(0, 100%, 50'
    const expectedError = new Error('Formato HSL inválido')

    expect(() => transformHslToHex(hsl)).toThrowError(expectedError)
  })

  it('should throw an error if the HSL format is invalid', () => {
    const hsl = 'hsl(0, 100%, 50'
    const expectedError = new Error('Formato HSL inválido')

    expect(() => transformHslToHex(hsl)).toThrowError(expectedError)
  })
})
