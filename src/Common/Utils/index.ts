import tinycolor from 'tinycolor2';
export const generateColors = (numberOfColors: number): string[] => {
    const baseColor = tinycolor('#FF6961')
    const step = 360 / numberOfColors
    let colors: string[] = []

    for (let i = 0; i < numberOfColors; i++) {
        const color = baseColor.spin(step * i)
        const hexColor = color.isValid() ? color.toHexString() : ''
        if (hexColor) {
            colors.push(hexColor)
        }
    }

    return colors
}