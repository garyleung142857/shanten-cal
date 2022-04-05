import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';


export default Icon = ({name, iconType}) => {
  if(!iconType){
    iconType = 'MaterialIcons'
  }
  if(iconType == 'MaterialIcons'){
    return <MaterialIcons name={name} size={18} /> 
  } else if (iconType == 'MaterialCommunityIcons') {
    return <MaterialCommunityIcons name={name} size={18} />
  } else {
    return <></>
  }
}