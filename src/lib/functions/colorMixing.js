import { ukeireStandard, rgbBackground, rgbBoarder, tenpaiBackgroundColor } from "../../constants/Constants"

const nodes = (ukeire) => {
  if (ukeire === -1){
    return null
  } else if (ukeire >= ukeireStandard.length) {
    return ukeireStandard[ukeireStandard.length - 1]
  } else {
    return ukeireStandard[ukeire]
  }
}

const i1 = (x, av, bv, a, b) => {
  const mixA = (bv - x) / (bv - av)
  const mixB = (x - av) / (bv - av)
  let colorX = new Array(3)
  for (let i = 0; i < 3; i++){
    colorX[i] = mixA * a[i] + mixB * b[i]
  }
  return `rgb(${colorX[0]}, ${colorX[1]}, ${colorX[2]})`
}


export const interpolateColor = (shanten, ukeire, isBoarder) => {
  if (shanten == -1){
    return `rgb(${tenpaiBackgroundColor[0]}, ${tenpaiBackgroundColor[1]}, ${tenpaiBackgroundColor[2]})`
  } else {
    const palette = isBoarder ? rgbBoarder : rgbBackground
    const standard = nodes(shanten)
    if(ukeire <= standard[0]){
      return `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`
    } else if (ukeire >= standard[2]){
      return `rgb(${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]})`
    } else {
      for(let i = 0; i < 2; i++){
        if (ukeire > standard[i] && ukeire <= standard[i + 1]){
          return i1(ukeire, standard[i], standard[i + 1], palette[i], palette[i + 1])
        }
      }
    }
  }
}