export const changeHsl = (
  color: string,
  saturation: string,
  lightness: string
) => {
  const root = document.documentElement

  const complementaryColor = (parseInt(color) + 200) % 360

  root.style.setProperty(
    '--color-primary-regular',
    updateHsl(color, saturation, lightness)
  )
  root.style.setProperty(
    '--color-complementary-highlight',
    updateHsl(
      complementaryColor.toString(),
      complementaryColor.toString(),
      lightness
    )
  )
}

const updateHsl = (
  newColor: string,
  newSaturation: string,
  newLightness: string
) => {
  return `${newColor} ${newSaturation} ${newLightness}`
}
