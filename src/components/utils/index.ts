
export function parseFuelPriceToNumberCalculable(value: string) {
  return Number(value.replace("R$ ", "").replace(".", "").replace(",", "."))
}

export function formatBRLValue(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}