import nerdamer from 'nerdamer/all.js'
import react from 'react'
import { motion } from 'framer-motion'
const Arg = () => {
    const [input_data, set_input_data] = react.useState({ data: '' })
    let result
    if (input_data.data) {
        try {
            result = nerdamer(`arg(${input_data.data})`).toString()
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
                    <input id='data' onChange={expression_onchange_handler} placeholder="Enter a complex number" className="navbar col-sm-12 rounded fs-3 bg-dark text-light"></input>
                </div>
                <div style={{ 'font-size': '60px' }} id='equals' className="text-center">
                    =
                </div>
                <div className="row card bg-dark mx-auto">
                    {result === 'Some confusion in your input' && <div className="col-sm-12 text-danger rounded  fs-3 card-body text-start">{result}</div>}
                    {result !== 'Some confusion in your input' && <motion.div animate={{ y: 10 }}  className="col-sm-12 text-info fw-bold rounded  fs-3 card-body text-start">{result}</motion.div>}
                </div>
            </div>
        </div>
    )
}
export default Arg