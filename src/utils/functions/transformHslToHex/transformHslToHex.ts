export const transformHslToHex = (hsl: string) => {
  const regex = /hsl\(\s*(\d+),\s*(\d+)%?,\s*(\d+)%?\)/
  const result = regex.exec(hsl)

  if (!result) {
    throw new Error('Formato HSL inválido')
  }

  const h = parseInt(result[1])
  const s = parseInt(result[2])
  const l = parseInt(result[3])

  const sNormalized = s / 100
  const lNormalized = l / 100

  const c = (1 - Math.abs(2 * lNormalized - 1)) * sNormalized
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = lNormalized - c / 2

  // Definição dos canais RGB baseados no hue
  const rgb = [
    [c, x, 0],
    [x, c, 0],
    [0, c, x],
    [0, x, c],
    [x, 0, c],
    [c, 0, x],
  ][Math.floor(h / 60) % 6]

  // Ajusta cada canal RGB
  const [r, g, b] = rgb.map((channel) => Math.round((channel + m) * 255))

  // Função auxiliar para converter o valor para hexadecimal
  const toHex = (n: number) => n.toString(16).padStart(2, '0')

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}
