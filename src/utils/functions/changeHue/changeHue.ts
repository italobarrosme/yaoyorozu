export const changeHue = (
  color: string,
  saturation: string,
  lightness: string
) => {
  const root = document.documentElement

  const complementaryColor = (parseInt(color) + 200) % 360

  root.style.setProperty(
    '--color-primary-regular',
    updateHue(color, saturation, lightness)
  )
  root.style.setProperty(
    '--color-complementary-highlight',
    updateHue(complementaryColor, saturation, lightness)
  )
}

const updateHue = (newColor, newSaturation, newLightness) => {
  return `${newColor} ${newSaturation} ${newLightness}`
}
