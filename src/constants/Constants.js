import { Dimensions } from 'react-native';

export const { 
  width: SIZE, height: HEIGHT
} = Dimensions.get('window')

export const MAX_TILES = 14
export const MAX_A_KIND = 4  // 4 tiles per type

export const TILES = [
  '1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m',
  '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s',
  '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p',
  '1z', '2z', '3z', '4z', '5z', '6z', '7z' 
]