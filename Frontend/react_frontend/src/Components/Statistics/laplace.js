import nerdamer from 'nerdamer/all.js'
import react from 'react'
import { motion } from 'framer-motion'
const Laplace = () => {
    const [input_data, set_input_data] = react.useState({ expression: '', time_var: '', trans_var: '' })
    let result
    if (input_data.expression && input_data.time_var && input_data.trans_var) {
        try {
            result = nerdamer(`laplace(${input_data.expression}, ${input_data.time_var}, ${input_data.trans_var})`).evaluate().toString()
            if (result === '0') {
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
        if (e.target.id === 'exp') {
            set_input_data({ ...input_data, expression: e.target.value })
        }
        else if (e.target.id === 'time_var') {
            set_input_data({ ...input_data, time_var: e.target.value.trim() })
        }
        else {
            set_input_data({ ...input_data, trans_var: e.target.value.trim() })
        }
    }

    return (
        <div className="container-sm">
            <div className="row">
                <div className=" col-sm-12">
                    <input id='exp' onChange={expression_onchange_handler} placeholder="Enter the function to transform" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
                    <input id='time_var' onChange={expression_onchange_handler} placeholder="Enter the time variable" className="navbar mt-1 col-sm-4 rounded fs-5 bg-dark text-light"></input>
                    <input id='trans_var' onChange={expression_onchange_handler} placeholder="Enter the tranformation variable" className="navbar mt-1 col-sm-4 rounded fs-5 bg-dark text-light"></input>
                </div>
                <div style={{ 'font-size': '60px' }} id='equals' className="text-center">
                    =
                </div>

                <div className="card bg-dark  ">
                    {result === 'Some confusion in your input' && <div className="col-sm-12 text-danger rounded navbar fs-3 card-body">{result}</div>}
                    {result !== 'Some confusion in your input' && <motion.div animate={{ y: 10 }} className="col-sm-12 text-info fw-bold rounded  fs-3 card-body text-start">{result}</motion.div>}
                </div>

            </div>
        </div>
    )
}
export default Laplace