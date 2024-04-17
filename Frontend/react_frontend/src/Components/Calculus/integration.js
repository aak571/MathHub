import nerdamer from 'nerdamer/all.js'
import react from 'react'
import { motion } from 'framer-motion'
const Integration = () => {
    const [input_data, set_input_data] = react.useState({ expression: '', wrt: '', ll: '', ul: '' })
    let result
    if (input_data.expression && input_data.wrt) {
        try {
            result = nerdamer(`integrate(${input_data.expression}, ${input_data.wrt})`).toString()
            if(input_data.ll && input_data.ul)
            {
                console.log(input_data)
                result = nerdamer(`defint(${input_data.expression}, ${input_data.ll}, ${input_data.ul})`).toString()
                console.log(result)
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
        else if (e.target.id === 'wrt') {
            set_input_data({ ...input_data, wrt: e.target.value.trim() })
        }
        else if (e.target.id === 'll') {
            set_input_data({ ...input_data, ll: e.target.value.trim() })
        }
        else {
            set_input_data({ ...input_data, ul: e.target.value.trim() })
        }
    }

    return (
        <div className="container-sm  ">
            <div className="row">
                <div className=" col-sm-12">
                    <input id='exp' onChange={expression_onchange_handler} placeholder="Enter the function/expression to integrate" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
                    <input id='wrt' onChange={expression_onchange_handler} placeholder="integrate w.r.t to ?" className="navbar mt-1 col-sm-4 rounded fs-5 bg-dark text-light"></input>
                    <input id='ll' onChange={expression_onchange_handler} placeholder="Lower limit ?" className="navbar mt-1 col-sm-4 rounded fs-5 bg-dark text-light"></input>
                    <input id='ul' onChange={expression_onchange_handler} placeholder="Upper limit ?" className="navbar mt-1 col-sm-4 rounded fs-5 bg-dark text-light"></input>
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
export default Integration