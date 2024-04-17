import nerdamer from 'nerdamer/all.js'
import react from 'react'
import { motion } from 'framer-motion'
const PartFrac = () => {
    const [input_data, set_input_data] = react.useState({ exp: '', var: '' })
    let result
    if (input_data.exp && input_data.var) {
        try {
            result = nerdamer(`partfrac(${input_data.exp}, ${input_data.var})`).toString()
        }
        catch {
            result = 'Some confusion in your input'
        }
    }
    else {
        result = '_'
    }

    const expression_onchange_handler = e => {
        if (e.target.id === 'exp') {
            set_input_data({ ...input_data, exp: e.target.value })
        }
        else {
            set_input_data({ ...input_data, var: e.target.value })
        }
    }

    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-sm-12">
                    <input id='exp' onChange={expression_onchange_handler} placeholder="Enter your expression here" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
                    <input id='var' onChange={expression_onchange_handler} placeholder="Enter your expression here" className="navbar mt-1 col-sm-3 rounded fs-3 bg-dark text-light"></input>
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
export default PartFrac