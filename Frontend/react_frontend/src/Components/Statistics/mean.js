import nerdamer from 'nerdamer/all.js'
import react from 'react'
import { motion } from 'framer-motion'
const Mean = () => {
    const [input_data, set_input_data] = react.useState({ data: '' })
    let result
    if (input_data.data) {
        try {
            result = nerdamer(`mean(${input_data.data})`).toString()
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
        <div className="container-sm">
            <div className="row">
                <div className=" col-sm-12">
                    <input id='data' onChange={expression_onchange_handler} placeholder="Enter data separated by a single comma" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
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
export default Mean