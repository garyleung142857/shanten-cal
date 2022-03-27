import { Dimensions } from 'react-native';

export const { 
  width: SIZE, height: HEIGHT
} = Dimensions.get('window')

export const MAX_TILES = 14
export const MAX_A_KIND = 4  // 4 tiles per type

export const TILES = [
  '1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m',
  '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p',
  '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s',
  '1z', '2z', '3z', '4z', '5z', '6z', '7z' 
]

export const ukeireStandard = [
  [2, 6, 10],
  [6, 18, 30],
  [12, 36, 60],
  [24, 72, 120]
]

export const rgbBoarder = [
  [255, 0, 0],
  [0, 255, 0],
  [0, 0, 255]
]

export const rgbBackground = [
  [255, 200, 200],
  [200, 255, 200],
  [200, 200, 255]
]

export const tenpaiBackgroundColor = [255, 255, 100]