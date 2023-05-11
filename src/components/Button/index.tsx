import { TouchableOpacity, View, Text } from 'react-native'
import { styles as S } from './styles'

type FieldTypes = {
  label: string
  onPress?: () => void
}

function Button({ label, onPress }: FieldTypes) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={S.wrapper}>
        <Text style={S.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { Button }