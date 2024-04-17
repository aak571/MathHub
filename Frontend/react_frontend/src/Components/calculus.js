import Differentiation from "./Calculus/differentiation.js"
import Integration from "./Calculus/integration.js"
import { motion } from 'framer-motion'
const Calculus = () => {
    return (
        <motion.div animate={{ x: 10 }} className="container-sm">
            <div id="calculus" className="">
                <div className="card col-sm-11 text-center mt-2 bg-info">
                    <div className="card-header col-sm-12  ">
                        <a href='#differentiation' className="btn col-sm-12 " data-bs-toggle="collapse">
                            Differentiation
                        </a>
                    </div>
                    <div id="differentiation" className="collapse col-sm-12  bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Differentiation />
                        </div>
                    </div>
                </div>

                <div className="card  text-center mt-2 col-sm-11 bg-info">
                    <div className="card-header col-sm-12  ">
                        <a href='#integration' className="btn col-sm-12" data-bs-toggle="collapse">
                            Integration
                        </a>
                    </div>
                    <div id="integration" className="collapse col-sm-12  bg-secondary" data-bs-parent='#calculus'>
                        <div className="card-body">
                            <Integration />
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
    )
}
export default Calculus