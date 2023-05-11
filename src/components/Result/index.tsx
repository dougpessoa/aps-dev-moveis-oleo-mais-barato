import { Text, View } from 'react-native'
import { styles as S } from './styles'
import { formatBRLValue } from '../utils'

type FuelType = 'gasolina' | 'álcool'

export type ResultTypes = {
  cheaper: FuelType
  costBenefit: FuelType
  costBenefitResult: number
}

function Result({ cheaper, costBenefit, costBenefitResult }: ResultTypes) {
  return (
    <View style={S.wrapper}>
      <View style={S.resultArea}>
        <Text style={S.labelText}>O óleo mais barato é: </Text>
        <Text style={S.productText}>{cheaper.toUpperCase()}</Text>
      </View>
      <View style={S.resultArea}>
        <Text style={S.labelText}>O óleo com maior custo/benefício é: </Text>
        <Text style={S.productText}>{costBenefit.toUpperCase()}</Text>
      </View>
      <View style={S.resultArea}>
        <Text style={S.labelText}>A diferença é de: </Text>
        <Text style={S.productText}>{formatBRLValue(costBenefitResult)}</Text>
      </View>
    </View>
  )
}

export { Result }