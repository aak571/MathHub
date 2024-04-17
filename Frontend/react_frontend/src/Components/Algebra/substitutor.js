import nerdamer from 'nerdamer/all.js'
import react from 'react'
import {motion} from 'framer-motion'
const Substitutor = () => {
    const [input_data, set_input_data] = react.useState({ exp: '', var: '', val: '' })
    let result
    if (input_data.exp && input_data.var && input_data.val) {
        try {
            result = nerdamer(`limit(${input_data.exp}, ${input_data.var}, ${input_data.val})`).toString()
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
        else if (e.target.id === 'var') {
            set_input_data({ ...input_data, var: e.target.value })
        }
        else {
            set_input_data({ ...input_data, val: e.target.value })
        }
    }

    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-sm-12">
                    <input id='exp' onChange={expression_onchange_handler} placeholder="Enter an expression" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
                    <input id='var' onChange={expression_onchange_handler} placeholder="Enter the variable to be substituted" className="navbar mt-1 col-sm-5 rounded fs-3 bg-dark text-light"></input>
                    <input id='val' onChange={expression_onchange_handler} placeholder="Enter the value to be substituted" className="navbar mt-1 col-sm-5 rounded fs-3 bg-dark text-light"></input>
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
export default Substitutor