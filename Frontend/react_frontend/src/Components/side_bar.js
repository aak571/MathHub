import react from 'react'
import { motion } from 'framer-motion'
import MatricesAndVectors from './matrices_and_vectors.js'
import Arithmetic from './arithmetic.js'
import Calculus from './calculus.js'
import Statistics from './statistics.js'
import Algebra from './algebra.js'
import Complex from './complex.js'
import ExpCracker from './exp_cracker.js'
const SideBar = () => {
    const [states, set_states] = react.useState({ side_bar_flag: true, mat: true, arith: false, calc: false, stats: false, alg: false, com: false, ec: false })

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex">
                    <div className="col-sm-2 mt-2 ">
                        <a className='btn'><i onClick={() => set_states({ ...states, side_bar_flag: !states.side_bar_flag })} className="bi bi-list fs-1 col-sm-2 text-success"></i></a>
                        {states.side_bar_flag && <motion.div animate={{ x: 8 }}>
                            <a id='mat' onClick={() => set_states({ ...states, mat: true, arith: false, calc: false, stats: false, alg: false, com: false, ec: false })} className="col-sm-11 fs-5 btn text-decoration-none text-light bg-primary">Matrices and Vectors</a>
                            <a id='arith' onClick={() => set_states({ ...states, mat: false, arith: true, calc: false, stats: false, alg: false, com: false, ec: false })} className="col-sm-11 fs-5 btn text-decoration-none text-light bg-primary mt-1">Arithmetic</a>
                            <a id='calc' onClick={() => set_states({ ...states, mat: false, arith: false, calc: true, stats: false, alg: false, com: false, ec: false })} className="col-sm-11 fs-5 btn text-decoration-none text-light bg-primary mt-1">Calculus</a>
                            <a id='stats' onClick={() => set_states({ ...states, mat: false, arith: false, calc: false, stats: true, alg: false, com: false, ec: false })} className="col-sm-11 fs-5 btn text-decoration-none text-light bg-primary mt-1">Statistics</a>
                            <a id='alg' onClick={() => set_states({ ...states, mat: false, arith: false, calc: false, stats: false, alg: true, com: false, ec: false })} className="col-sm-11 fs-5 btn text-decoration-none text-light bg-primary mt-1">Algebra</a>
                            <a id='com' onClick={() => set_states({ ...states, mat: false, arith: false, calc: false, stats: false, alg: false, com: true, ec: false })} className="col-sm-11 fs-5 btn text-decoration-none text-light bg-primary mt-1">Complex Numbers</a>
                            <a id='ec' onClick={() => set_states({ ...states, mat: false, arith: false, calc: false, stats: false, alg: false, com: false, ec: true })} className="col-sm-11 fs-5 btn text-decoration-none text-light bg-primary mt-1">Expression Cracker</a>
                        </motion.div>}
                    </div>
                    {states.mat && <MatricesAndVectors />}
                    {states.arith && <Arithmetic />}
                    {states.calc && <Calculus />}
                    {states.stats && <Statistics />}
                    {states.alg && <Algebra />}
                    {states.com && <Complex />}
                    {states.ec && <ExpCracker />}
                </div>
            </div>
        </div>
    )
}
export default SideBar



//<motion.div animate={{x: [31,0, 11,0,21]}} transition={{duration: 0.2, repeat: 20}}></motion.div>