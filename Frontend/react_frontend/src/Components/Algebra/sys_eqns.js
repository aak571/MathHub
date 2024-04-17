import nerdamer from 'nerdamer/all.js'
import math from '../Calculus/Data/math_config.js'
import react from 'react'
import { motion } from 'framer-motion'
const SysEqns = () => {
    const [input_data, set_input_data] = react.useState({ exp: '' })
    let result
    if (input_data.exp) {

        try {
            const eqns = input_data.exp.split(',')
            if (eqns.length === 1) {
                result = nerdamer.solveEquations(eqns).toString().split(',')
                result = [[result[0], math.evaluate(result[1])]]
            }
            else {
                result = nerdamer.solveEquations(eqns)
            }
            if (result !== 'Please check your input' && result !== '0') {
                if (result === 'System does not have a distinct solution') {
                    result = 'System does not have a distinct solution'
                }
                else {
                    result = result.map(root => root[0] + '=' + root[1]).join('; ')
                }
            }
            else {
                if (result === '0') {
                    result = '0'
                }
                else {
                    result = 'Some confusion in your input'
                }
            }
        }
        catch (err) {
            if (err.toString() === 'SolveError: System does not have a distinct solution') {
                result = 'System does not have a distinct solution'
            }
            else if (err.toString() === "TypeError: Cannot read properties of undefined (reading 'length')") {
                result = '0'
            }
            else {

                result = 'Some confusion in your input'
            }
        }
    }
    else {
        result = '_'
    }

    const expression_onchange_handler = e => {
        set_input_data({ ...input_data, exp: e.target.value })
    }

    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-sm-12">
                    <input id='exp' onChange={expression_onchange_handler} placeholder="Enter an expression" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
                </div>
                <div style={{ 'font-size': '60px' }} id='equals' className="text-center">
                    =
                </div>
                <div className="row card bg-dark mx-auto">
                    {result === 'Some confusion in your input' && <div className="col-sm-12 text-danger rounded  fs-3 card-body text-start">{result}</div>}
                    {result !== 'Some confusion in your input' && <motion.div animate={{ y: 10 }} className="col-sm-12 text-info fw-bold rounded  fs-3 card-body text-start">{result}</motion.div>}
                </div>
            </div>
        </div>
    )
}
export default SysEqns