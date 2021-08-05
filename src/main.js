const jsf = require('json-schema-faker')
const seedrandom = require('seedrandom')

const seed = process.argv.slice(2)[0]

if (seed === undefined) {
  console.log('Usage: node main.js SEED')
  process.exit(1)
}

jsf.option({
  random: seedrandom(seed)
})

jsf.format('iso_datetime', () => jsf.random.date().toISOString())

const schema = {
  type: 'object',
  properties: {
    customDatetime: {
      type: 'string',
      format: 'iso_datetime',
    },
    builtinDatetime: {
      type: 'string',
      format: 'datetime'
    }
  },
  required: ['customDatetime', 'builtinDatetime']
}

const x = jsf.generate(schema)
console.log(x)
