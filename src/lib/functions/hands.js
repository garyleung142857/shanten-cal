import { TILES } from '../../constants/Constants.js'

export const sortTiles = (tileArr) => {
  tileArr.sort((a, b) => {
    return TILES.indexOf(a) > TILES.indexOf(b) ? 1 : -1
  })
}