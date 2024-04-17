import { create, all } from 'mathjs'
const config = {
    epsilon: 0,
    number: 'BigNumber',
    precision: 64,
    predictable: false,
    randomSeed: null
}
const math = create(all, config)
export default math