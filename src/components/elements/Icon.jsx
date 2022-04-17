import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export default Icon = ({name, iconType, size}) => {
  if(!iconType){ iconType = 'MaterialIcons' }
  if(!size){ size = 18 }

  if(iconType == 'MaterialIcons'){
    return <MaterialIcons name={name} size={size} /> 
  } else if (iconType == 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={name} size={18} />
  } else {
    return <></>
  }
}