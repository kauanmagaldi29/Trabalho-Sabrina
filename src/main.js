const Evolucao = require('./classes/evolucao.js')

const QUANTIDADE_CIDADES = 1
const TAMANHO_POPULACAO = 1
const LIMITE_GERACOES = 5

new Evolucao(
  QUANTIDADE_CIDADES,
  TAMANHO_POPULACAO,
  LIMITE_GERACOES).evoluir()

