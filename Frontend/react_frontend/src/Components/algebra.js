import CompSq from "./Algebra/comp_sq.js"
import Expand from "./Algebra/expand.js"
import Factors from "./Algebra/factors.js"
import GCD from "./Algebra/gcd.js"
import LCM from "./Algebra/lcm.js"
import PartFrac from "./Algebra/part_frac.js"
import Roots from "./Algebra/roots.js"
import Simplifier from "./Algebra/simplifier.js"
import Substitutor from "./Algebra/substitutor.js"
import SysEqns from "./Algebra/sys_eqns.js"
import { motion } from 'framer-motion'
const Algebra = () => {
    return (
        <motion.div animate={{ x: 10 }} className="container-sm">
            <div id="algebra" className="">
                <div className="card col-sm-11 text-center mt-2  bg-info">
                    <div className="card-header col-sm-12  ">
                        <a href='#simplifier' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Expression Simplifier
                        </a>
                    </div>
                    <div id="simplifier" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <Simplifier />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#expand' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Expression Expander
                        </a>
                    </div>
                    <div id="expand" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <Expand />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#factors' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Factors
                        </a>
                    </div>
                    <div id="factors" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <Factors />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#part_frac' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Partial Fractions
                        </a>
                    </div>
                    <div id="part_frac" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <PartFrac />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#lcm' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            LCM
                        </a>
                    </div>
                    <div id="lcm" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <LCM />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#gcd' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            GCD
                        </a>
                    </div>
                    <div id="gcd" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <GCD />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#roots' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Roots
                        </a>
                    </div>
                    <div id="roots" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <Roots />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#sys_eqns' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            System of Equations
                        </a>
                    </div>
                    <div id="sys_eqns" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <SysEqns />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#compsq' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Complete Square
                        </a>
                    </div>
                    <div id="compsq" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <CompSq />
                        </div>
                    </div>
                </div>

                <div className="card col-sm-11 text-center mt-2 mb-2">
                    <div className="card-header col-sm-12  bg-info ">
                        <a href='#substitutor' className="btn collapsed col-sm-12" data-bs-toggle="collapse">
                            Substitutor
                        </a>
                    </div>
                    <div id="substitutor" className="collapse col-sm-12 bg-secondary" data-bs-parent='#algebra'>
                        <div className="card-body">
                            <Substitutor />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default Algebra