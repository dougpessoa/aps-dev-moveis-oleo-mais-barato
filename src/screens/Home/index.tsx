import { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles as S } from "./styles";
import { Button } from "../../components/Button";
import { Field } from "../../components/Field";
import { Result, ResultTypes } from '../../components/Result';

const FUEL_DIVISOR = 0.7

function Home() {
  const [gasoline, setGasoline] = useState(0)
  const [alchool, setAlchool] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<ResultTypes>({
    cheaper: 'gasolina',
    costBenefit: 'gasolina',
    costBenefitResult: 0,
  })

  function calculateResult() {
    const cheaper = gasoline < alchool ? 'gasolina' : 'álcool'
    const costBenefitResult = alchool / gasoline
    const costBenefit = costBenefitResult > FUEL_DIVISOR ? 'gasolina' : 'álcool'

    setResult({
      cheaper,
      costBenefit,
      costBenefitResult
    })

    setShowResult(true)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={S.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={S.inner}>
          <View>
            <Text style={S.header}>Oléo Mais Barato!</Text>
            <Field
              label="Valor da Gasolina"
              onChange={(e) => {
                setGasoline(e);
                setShowResult(false)
              }}
            />
            <Field
              label="Valor do Álcool"
              onChange={(e) => {
                setAlchool(e)
                setShowResult(false)
              }}
            />

            {showResult && <Result {...result} />}

          </View>
          <View style={S.btnContainer}>
            <Button label='Calcular' onPress={() => calculateResult()} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export { Home }