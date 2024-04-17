import math from './Calculus/Data/math_config.js'
import react from 'react'
import { motion } from 'framer-motion'
const ExpCracker = () => {
    const [input_data, set_input_data] = react.useState({ data: '' })
    let result
    if (input_data.data) {
        try {
            result = math.evaluate(input_data.data).toString()
            if ((result[0] >= 'a' && result[0] <= 'z') || result[0] === 'f') {
                result = 'Some confusion in your input'
            }
        }
        catch {
            result = 'Some confusion in your input'
        }
    }
    else {
        result = '0'
    }

    const expression_onchange_handler = e => {
        set_input_data({ ...input_data, data: e.target.value })
    }

    return (
        <motion.div animate={{ x: 10 }} className="container-sm mt-5">
            <div className="row">
                <div className=" col-sm-9 mx-auto">
                    <input id='data' onChange={expression_onchange_handler} placeholder="Enter a mathematical expression" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
                </div>
                <div style={{ 'font-size': '60px' }} id='equals' className="text-center">
                    =
                </div>
                <div className="row card bg-dark col-sm-9 mx-auto">
                    {result === 'Some confusion in your input' && <div className="col-sm-12 text-danger rounded  fs-3 card-body text-start">{result}</div>}
                    {result !== 'Some confusion in your input' && <motion.div animate={{ y: 10 }} className="col-sm-12 text-info fw-bold rounded  fs-3 card-body text-start">{result}</motion.div>}
                </div>
            </div>
        </motion.div>
    )
}
export default ExpCracker