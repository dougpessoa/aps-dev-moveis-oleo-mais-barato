import { Text, View } from 'react-native'
import { styles as S } from './styles'
import MaskInput, { createNumberMask } from 'react-native-mask-input';
import { useState } from 'react';
import { parseFuelPriceToNumberCalculable } from '../utils';

type FieldTypes = {
  label: string
  onChange?: (price: number) => void
}

const realMask = createNumberMask({
  prefix: ['R', '$', ' '],
  delimiter: '.',
  separator: ',',
  precision: 2,
})

function Field({ label, onChange }: FieldTypes) {
  const [value, setValue] = useState('')

  return (
    <View style={S.wrapper}>
      <Text style={S.label}>{label}</Text>
      <MaskInput
        value={value}
        style={S.input}
        mask={realMask}
        keyboardType='numeric'
        onChangeText={(masked, unmasked) => {
          setValue(unmasked);
          onChange(parseFuelPriceToNumberCalculable(masked))
        }}
      />
    </View>
  )
}

export { Field }