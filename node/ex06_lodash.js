const _ = require('lodash')

const alunos = [{
    nome: 'Jão',
    nota: 7.6
}, {
    nome: 'Maria',
    nota: 8.6
}, {
    nome: 'Pedro',
    nota: 10
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)